<?php

declare(strict_types=1);

// Unit checks for the enquiry endpoint. No web server, no network, no real mail: transports are fakes.
// Run: php backend/tests/enquiry.test.php (exit 0 means every check passed).
require __DIR__ . '/../src/bootstrap.php';

$passed = 0;
function check(bool $condition, string $label): void
{
    global $passed;
    if (!$condition) {
        fwrite(STDERR, "FAIL: $label\n");
        exit(1);
    }
    $passed++;
    echo "PASS: $label\n";
}
function rejected(array $input, string $earliest = '2026-10-29'): bool
{
    try { prepareEnquiry($input, $earliest); return false; }
    catch (InvalidArgumentException) { return true; }
}

$now = gmmktime(12, 0, 0, 10, 30, 2026);
$cake = ['form' => 'custom-cakes', 'name' => 'Ada Example', 'email' => 'ada@example.org', 'phone' => '', 'date' => '2026-12-12',
    'occasion' => 'Birthday', 'servings' => '30', 'ideas' => "Chocolate sponge\nwith gold stars", 'allergies' => '', 'website' => ''];
$catering = ['form' => 'catering', 'name' => 'Bola Example', 'email' => '', 'phone' => '+44 7700 900123', 'date' => '2026-11-01',
    'guests' => '60', 'town' => 'Croydon', 'food' => 'Puff puff and dodo', 'allergies' => 'Peanuts', 'website' => ''];

// ---- Validation ----
$e = prepareEnquiry($cake, '2026-10-29', $now);
check(str_starts_with($e['reference'], 'DF-20261030-') && strlen($e['reference']) === 20, 'reference has the DF-date-hex shape');
check($e['subject'] === 'Order request: Custom cake [' . $e['reference'] . ']', 'subject is fixed wording plus the reference');
check(str_contains($e['body'], 'Name: Ada Example') && str_contains($e['body'], 'Number of servings: 30') && str_contains($e['body'], "Flavour and design ideas:\nChocolate sponge\nwith gold stars"), 'owner email lists every field with its label');
check(str_contains($e['body'], 'Allergies:' . "\n" . '(left empty)'), 'an empty box is marked as left empty');
check($e['replyTo'] === 'ada@example.org' && $e['contact'] === 'ada@example.org', 'reply address and rate-limit contact come from the email');
$c = prepareEnquiry($catering, '2026-10-29', $now);
check($c['replyTo'] === '' && $c['contact'] === '447700900123' && str_contains($c['body'], 'left no email'), 'phone-only request has no reply address and says to ring');
check(str_contains($c['body'], 'Town: Croydon') && str_contains($c['body'], 'Event date: 2026-11-01'), 'catering labels');

$bad = [
    'unknown form' => ['form' => 'other'],
    'missing form' => ['form' => null],
    'honeypot filled' => ['website' => 'http://spam.example'],
    'no name' => ['name' => '  '],
    'no email or phone' => ['email' => '', 'phone' => ''],
    'bad email' => ['email' => 'not-an-email'],
    'email header injection' => ['email' => "ada@example.org\r\nBcc: victim@example.org"],
    'name header injection' => ['name' => "Ada\nBcc: victim@example.org"],
    'bad phone' => ['email' => '', 'phone' => '123'],
    'past date' => ['date' => '2026-10-01'],
    'impossible date' => ['date' => '2026-02-30'],
    'missing date' => ['date' => ''],
    'not a whole number' => ['servings' => '12.5'],
    'too long box' => ['ideas' => str_repeat('x', 5001)],
    'too long line' => ['occasion' => str_repeat('x', 201)],
    'null byte' => ['allergies' => "nuts\0"],
    'array value' => ['name' => ['Ada']],
    'number value' => ['servings' => 30],
    'field from the other form' => ['guests' => '10'],
    'unknown field' => ['admin' => '1'],
];
foreach ($bad as $label => $change) {
    $input = array_replace($cake, $change);
    if (array_key_exists('form', $change) && $change['form'] === null) unset($input['form']);
    check(rejected($input), 'rejected: ' . $label);
}
check(!rejected(array_replace($cake, ['date' => '2026-10-29'])), 'yesterday in UTC is still accepted (time zones)');

// ---- Settings ----
$dir = sys_get_temp_dir() . '/dhemmyn-enquiry-test-' . bin2hex(random_bytes(5));
mkdir($dir, 0700);
$state = $dir . '/state';
mkdir($state, 0700);
check(loadConfig('') === DHEMMYN_CONFIG_DEFAULTS && loadConfig($dir . '/missing.php')['mail_enabled'] === false, 'no settings file means sending off');
file_put_contents($dir . '/broken.php', '<?php return "nope";');
check(loadConfig($dir . '/broken.php') === DHEMMYN_CONFIG_DEFAULTS, 'a settings file that is not an array means sending off');
file_put_contents($dir . '/typed.php', "<?php return ['mail_enabled' => 'yes', 'recipient' => 'owner@example.org'];");
$typed = loadConfig($dir . '/typed.php');
check($typed['mail_enabled'] === false && $typed['recipient'] === 'owner@example.org', 'a wrongly typed value keeps its safe default');
$sample = loadConfig(__DIR__ . '/../config.sample.php');
check($sample === DHEMMYN_CONFIG_DEFAULTS && !sendingReady($sample), 'config.sample.php loads, holds no values and leaves sending off');
$on = array_replace(DHEMMYN_CONFIG_DEFAULTS, ['mail_enabled' => true, 'recipient' => 'owner@example.org', 'from' => 'website@example.org',
    'rate_key' => str_repeat('test-only-', 4), 'state_dir' => $state]);
check(sendingReady($on), 'complete mail() settings are ready');
check(!sendingReady(array_replace($on, ['mail_enabled' => false])), 'switched off stays off');
check(!sendingReady(array_replace($on, ['recipient' => ''])), 'no recipient means off');
check(!sendingReady(array_replace($on, ['rate_key' => 'short'])), 'short rate key means off');
check(!sendingReady(array_replace($on, ['transport' => 'smtp'])), 'smtp without host and login means off');
$smtpOn = array_replace($on, ['transport' => 'smtp', 'smtp_host' => 'mail.example.org', 'smtp_port' => 587, 'smtp_secure' => 'tls', 'smtp_user' => 'website@example.org', 'smtp_pass' => 'test-only']);
check(sendingReady($smtpOn), 'complete smtp settings are ready');

// ---- Endpoint ----
$request = static fn(array $over = []): array => array_replace(['method' => 'POST', 'origin' => 'https://dhemmynfood.mimmycare.com',
    'contentType' => 'application/json', 'contentLength' => 0, 'body' => json_encode($cake), 'ip' => '203.0.113.7'], $over);
$sent = [];
$fake = function (...$args) use (&$sent): bool { $sent[] = $args; return true; };
$code = static fn(array $a): string => $a['body']['error']['code'] ?? 'ok';

$a = enquiryResponse($request(['method' => 'GET']), $on, $fake, false, $now);
check($a['status'] === 405 && $a['headers']['Allow'] === 'POST' && $code($a) === 'method_not_allowed', 'GET answers 405 with Allow: POST (the smoke check)');
check(enquiryResponse($request(['origin' => 'https://evil.example']), $on, $fake, false, $now)['status'] === 403, 'other origin answers 403');
check(enquiryResponse($request(['origin' => '']), $on, $fake, false, $now)['status'] === 403, 'missing origin answers 403');
check(enquiryResponse($request(['origin' => 'http://127.0.0.1:5192']), $on, $fake, false, $now)['status'] === 403, 'a local origin is refused outside the dev server');
check(enquiryResponse($request(['contentType' => 'application/x-www-form-urlencoded']), $on, $fake, false, $now)['status'] === 415, 'non-JSON answers 415');
check(enquiryResponse($request(['contentLength' => 40000]), $on, $fake, false, $now)['status'] === 413, 'oversized answers 413');
check($code(enquiryResponse($request(['body' => '{not json']), $on, $fake, false, $now)) === 'invalid', 'broken JSON answers invalid');
check(enquiryResponse($request(['body' => '["a"]']), $on, $fake, false, $now)['status'] === 422, 'a JSON list answers 422');
$a = enquiryResponse($request(['body' => json_encode(array_replace($cake, ['email' => 'bad']))]), $on, $fake, false, $now);
check($a['status'] === 422 && str_contains($a['body']['error']['message'], 'email address'), 'invalid field answers 422 with the reason');

$a = enquiryResponse($request(), DHEMMYN_CONFIG_DEFAULTS, $fake, false, $now);
check($a['status'] === 503 && $code($a) === 'sending_off' && $sent === [], 'sending off: 503 sending_off and nothing sent');
$a = enquiryResponse($request(), array_replace($on, ['recipient' => '']), $fake, false, $now);
check($code($a) === 'sending_off' && $sent === [], 'switched on but incomplete still answers sending_off');

$a = enquiryResponse($request(), $on, $fake, false, $now);
check($a['status'] === 200 && $a['body']['ok'] === true && str_starts_with($a['body']['reference'], 'DF-'), 'sending on: 200 with a reference');
check(count($sent) === 1 && $sent[0][0] === 'owner@example.org', 'exactly one email, to the owner only');
[$to, $subject, $body, $headers] = $sent[0];
check(!str_contains($subject, 'Ada') && $headers['Reply-To'] === 'ada@example.org' && $headers['From'] === 'Dhemmyn Food website <website@example.org>', 'headers: fixed subject, visitor as Reply-To, sender from settings');
check(str_contains(base64_decode(str_replace("\r\n", '', $body), true) ?: '', 'Name: Ada Example'), 'body survives base64 transport encoding');
check(!str_contains(implode("\n", $headers), 'Chocolate'), 'no visitor text in any header');

$a = enquiryResponse($request(), $on, fn() => false, false, $now);
check($a['status'] === 502 && $code($a) === 'not_sent', 'refused by the mail service: 502 not_sent');
$a = enquiryResponse($request(), array_replace($on, ['state_dir' => __DIR__ . '/../public']), $fake, false, $now);
check($a['status'] === 503 && $code($a) === 'unavailable', 'rate-limit storage inside the web root is refused (503 unavailable)');

// ---- Rate limit ----
$key = str_repeat('test-only-', 4);
$rate = $dir . '/rate';
mkdir($rate, 0700);
for ($i = 1; $i <= 3; $i++) check(allowRequest($rate, $key, '198.51.100.1', 'ada@example.org', $now), "same contact allowed ($i of 3)");
check(!allowRequest($rate, $key, '198.51.100.2', 'ada@example.org', $now), 'fourth request for one contact is refused, even from another IP');
for ($i = 1; $i <= 2; $i++) allowRequest($rate, $key, '198.51.100.9', "other$i@example.org", $now);
check(allowRequest($rate, $key, '198.51.100.9', 'other3@example.org', $now), 'third from one IP with new contacts still allowed (limit 5)');
allowRequest($rate, $key, '198.51.100.9', 'other4@example.org', $now);
check(allowRequest($rate, $key, '198.51.100.9', 'other5@example.org', $now) && !allowRequest($rate, $key, '198.51.100.9', 'other6@example.org', $now), 'sixth from one IP refused');
$stored = (string) file_get_contents($rate . '/enquiry-rate.json');
check(!str_contains($stored, 'ada@example.org') && !str_contains($stored, '198.51.100'), 'no raw email or IP saved');
$limited = $on;
$limited['state_dir'] = $rate;
$a = enquiryResponse($request(['ip' => '198.51.100.9']), $limited, $fake, false, $now + 60);
check($a['status'] === 429 && $a['headers']['Retry-After'] === '3600', 'endpoint answers 429 with Retry-After');
check(allowRequest($rate, $key, '198.51.100.2', 'ada@example.org', $now + 3601), 'limits expire after an hour');

// ---- SMTP conversation (scripted fake server) ----
final class FakeChannel implements SmtpChannel
{
    public array $sent = [];
    public bool $tls = false;
    public bool $closed = false;
    public function __construct(private array $replies) {}
    public function send(string $line): void { $this->sent[] = $line; }
    public function reply(): array { $r = array_shift($this->replies) ?? '421 gone'; return [(int) substr($r, 0, 3), $r]; }
    public function startTls(): bool { return $this->tls = true; }
    public function close(): void { $this->closed = true; }
}
$happy = ['220 hi', '250 ok', '220 go', '250 ok', '334 user', '334 pass', '235 auth ok', '250 ok', '250 ok', '354 send', '250 queued'];
$channel = new FakeChannel($happy);
$transport = makeTransport($smtpOn, fn() => $channel);
check($transport('owner@example.org', 'Order request: Custom cake [DF-1]', "QUJD\r\n.leading", ['From' => 'x <website@example.org>']), 'smtp: accepted message returns true');
check($channel->tls && $channel->closed, 'smtp: STARTTLS used and connection closed');
check(in_array('MAIL FROM:<website@example.org>', $channel->sent, true) && in_array('RCPT TO:<owner@example.org>', $channel->sent, true), 'smtp: envelope from settings and recipient');
check(in_array(base64_encode('website@example.org'), $channel->sent, true), 'smtp: AUTH LOGIN sends the user name');
$data = $channel->sent[array_search('DATA', $channel->sent, true) + 1];
check(str_contains($data, "Subject: Order request: Custom cake [DF-1]\r\n") && str_contains($data, "\r\n..leading") && str_ends_with($data, "\r\n."), 'smtp: headers, dot-stuffing and terminator');
$refused = new FakeChannel(['220 hi', '250 ok', '220 go', '250 ok', '334 user', '334 pass', '535 bad login']);
check(!makeTransport($smtpOn, fn() => $refused)('owner@example.org', 's', 'b', []) && end($refused->sent) === 'QUIT' && $refused->closed, 'smtp: a refused login returns false and quits');
$ssl = new FakeChannel(['220 hi', '250 ok', '334 user', '334 pass', '235 ok', '250 ok', '250 ok', '354 go', '250 ok']);
check(makeTransport(array_replace($smtpOn, ['smtp_secure' => 'ssl', 'smtp_port' => 465]), fn() => $ssl)('owner@example.org', 's', 'b', []) && !$ssl->tls, 'smtp: implicit TLS (465) skips STARTTLS');

// ---- Clean up ----
foreach ([$rate . '/enquiry-rate.json', $dir . '/broken.php', $dir . '/typed.php'] as $f) @unlink($f);
@rmdir($rate);
@rmdir($state);
@rmdir($dir);
echo "\n$passed checks passed.\n";
