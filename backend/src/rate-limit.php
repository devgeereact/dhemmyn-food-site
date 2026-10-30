<?php

declare(strict_types=1);

// Per hour: 50 requests in all, 5 from one IP address, 3 for one email or phone number.
// A locked, bounded private file. No message contents or raw email, phone or IP values are saved:
// only keyed hashes (HMAC with the private 'rate_key') and counters. Modelled on harni's rate-limit.php.

const DHEMMYN_RATE_LIMITS = ['global' => 50, 'ip' => 5, 'contact' => 3];

function allowRequest(string $directory, string $secret, string $ip, string $contact, ?int $now = null): bool
{
    if (!is_dir($directory) || !is_writable($directory) || strlen($secret) < 32) {
        throw new RuntimeException('Rate-limit storage is not configured.');
    }
    $resolved = realpath($directory);
    // Without a web server (tests, CLI) the repository's public folder stands in for the web root.
    // The storage may sit neither in the web root nor in the code folder.
    $publicRoot = realpath(($_SERVER['DOCUMENT_ROOT'] ?? '') ?: dirname(__DIR__) . '/public');
    $codeRoot = realpath(__DIR__);
    if ($resolved === false || $publicRoot === false || $codeRoot === false) {
        throw new RuntimeException('Rate-limit storage or web root cannot be resolved.');
    }
    foreach ([$publicRoot, $codeRoot] as $forbidden) {
        if ($resolved === $forbidden || str_starts_with($resolved, $forbidden . DIRECTORY_SEPARATOR)) {
            throw new RuntimeException('Rate-limit storage must be outside the web root and the code folder.');
        }
    }
    $file = fopen($resolved . '/enquiry-rate.json', 'c+');
    if (!$file || !flock($file, LOCK_EX)) throw new RuntimeException('Cannot lock rate-limit storage.');
    try {
        $raw = stream_get_contents($file);
        $entries = $raw === '' ? [] : json_decode((string) $raw, true, 32, JSON_THROW_ON_ERROR);
        if (!is_array($entries)) throw new RuntimeException('Invalid rate-limit storage.');
        $now ??= time();
        $entries = array_filter($entries, fn($entry) => is_array($entry) && ($entry['until'] ?? 0) > $now);
        $keys = [
            'global' => 'global',
            'ip' => hash_hmac('sha256', 'ip:' . $ip, $secret),
            'contact' => hash_hmac('sha256', 'contact:' . $contact, $secret),
        ];
        $allowed = true;
        foreach ($keys as $kind => $key) {
            if (($entries[$key]['count'] ?? 0) >= DHEMMYN_RATE_LIMITS[$kind]) $allowed = false;
        }
        if ($allowed) foreach ($keys as $key) {
            $entries[$key] = ['count' => ($entries[$key]['count'] ?? 0) + 1, 'until' => $entries[$key]['until'] ?? $now + 3600];
        }
        rewind($file);
        if (!ftruncate($file, 0) || fwrite($file, json_encode($entries, JSON_THROW_ON_ERROR)) === false || !fflush($file)) {
            throw new RuntimeException('Cannot save rate-limit storage.');
        }
        return $allowed;
    } finally {
        flock($file, LOCK_UN);
        fclose($file);
    }
}
