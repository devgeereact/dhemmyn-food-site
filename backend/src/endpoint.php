<?php

declare(strict_types=1);

// HTTP handling for POST /api/enquiry.php. Every answer is JSON:
//   success  200 {"ok":true,"reference":"DF-..."}
//   failure  4xx/5xx {"ok":false,"error":{"code":"...","message":"..."}}
// Codes: method_not_allowed, forbidden_origin, unsupported_type, too_large, invalid, sending_off,
// rate_limited, not_sent, unavailable. The browser treats "sending_off" as "online sending is not
// switched on yet" and shows the WhatsApp, phone and email details instead.

const DHEMMYN_ORIGINS = ['https://dhemmynfood.mimmycare.com'];
const DHEMMYN_BODY_LIMIT = 32768;

function failure(int $status, string $code, string $message): array
{
    return ['status' => $status, 'body' => ['ok' => false, 'error' => ['code' => $code, 'message' => $message]], 'headers' => []];
}

/**
 * The whole decision for one request, without touching PHP's globals, so it is testable without a server.
 * $request: method, origin, contentType, contentLength, body, ip. $send is the transport (makeTransport()).
 *
 * @return array{status: int, body: array, headers: array<string,string>}
 */
function enquiryResponse(array $request, array $config, callable $send, bool $isDev = false, ?int $now = null): array
{
    if ($request['method'] !== 'POST') {
        $answer = failure(405, 'method_not_allowed', 'Use the order request form to send a request.');
        $answer['headers']['Allow'] = 'POST';
        return $answer;
    }
    $origins = DHEMMYN_ORIGINS;
    // A local origin is accepted only by PHP's own development server, never on the host.
    if ($isDev) {
        $port = getenv('DHEMMYN_PORT');
        $port = is_string($port) && preg_match('/^\d{1,5}$/D', $port) === 1 ? (int) $port : 5192;
        $origins = array_merge($origins, ['http://127.0.0.1:' . $port, 'http://localhost:' . $port]);
    }
    if (!in_array($request['origin'], $origins, true)) return failure(403, 'forbidden_origin', 'Please send the form from dhemmynfood.mimmycare.com.');
    if (strtolower(trim(explode(';', $request['contentType'])[0])) !== 'application/json') return failure(415, 'unsupported_type', 'Unsupported form format.');
    if ($request['contentLength'] > DHEMMYN_BODY_LIMIT || strlen($request['body']) > DHEMMYN_BODY_LIMIT) return failure(413, 'too_large', 'Your request is too long. Please shorten it.');
    $now ??= time();
    try {
        $input = json_decode($request['body'], true, 8, JSON_THROW_ON_ERROR);
        if (!is_array($input) || array_is_list($input)) throw new InvalidArgumentException('Please check the form fields.');
        $enquiry = prepareEnquiry($input, gmdate('Y-m-d', $now - 86400), $now);
    } catch (JsonException) {
        return failure(422, 'invalid', 'Invalid form data.');
    } catch (InvalidArgumentException $error) {
        return failure(422, 'invalid', $error->getMessage());
    }
    if (!sendingReady($config)) {
        if (($config['mail_enabled'] ?? false) === true) error_log('[dhemmyn enquiry] mail_enabled is true but the private settings are incomplete');
        return failure(503, 'sending_off', 'Online order requests are not switched on yet. Nothing was sent.');
    }
    try {
        // REMOTE_ADDR must be the real visitor address. Behind Cloudflare the host has to restore it from
        // CF-Connecting-IP (trusted only from Cloudflare's ranges); otherwise every visitor shares an edge
        // address and the per-IP limit acts like the global one. A client-sent header is never trusted here.
        if (!allowRequest($config['state_dir'], $config['rate_key'], $request['ip'], $enquiry['contact'], $now)) {
            $answer = failure(429, 'rate_limited', 'Too many requests. Please wait an hour, or message me instead.');
            $answer['headers']['Retry-After'] = '3600';
            return $answer;
        }
        $result = deliverEnquiry($enquiry, $config, $send);
    } catch (Throwable) {
        // No message contents or settings are exposed in the answer or the log.
        error_log('[dhemmyn enquiry] sending failed');
        return failure(503, 'unavailable', 'Online sending is temporarily unavailable. Nothing was sent.');
    }
    if (!$result['ok']) return failure(502, 'not_sent', 'The mail service did not accept your request. Nothing was sent.');
    return ['status' => 200, 'body' => ['ok' => true, 'reference' => $result['reference']], 'headers' => []];
}

/** Reads PHP's request globals, answers, and ends the request. Called by the public entry file only. */
function handleEnquiryRequest(string $configPath, bool $isDev = false): never
{
    header_remove('X-Powered-By');
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    $method = (string) ($_SERVER['REQUEST_METHOD'] ?? '');
    $length = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
    $body = '';
    if ($method === 'POST' && $length <= DHEMMYN_BODY_LIMIT) {
        $body = (string) file_get_contents('php://input', false, null, 0, DHEMMYN_BODY_LIMIT + 1);
    }
    $config = loadConfig($configPath);
    $answer = enquiryResponse([
        'method' => $method,
        'origin' => (string) ($_SERVER['HTTP_ORIGIN'] ?? ''),
        'contentType' => (string) ($_SERVER['CONTENT_TYPE'] ?? ''),
        'contentLength' => $length,
        'body' => $body,
        'ip' => (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
    ], $config, makeTransport($config), $isDev);
    http_response_code($answer['status']);
    foreach ($answer['headers'] as $name => $value) header($name . ': ' . $value);
    echo json_encode($answer['body'], JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES);
    exit;
}
