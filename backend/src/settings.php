<?php

declare(strict_types=1);

// Private settings. On the server they live in ~/private-config/dhemmyn/config.php (0600, outside every
// web root), a PHP file that returns an array with the keys in backend/config.sample.php. Sending is OFF
// unless that file sets 'mail_enabled' => true AND every value sending needs is present and valid.
// This file is called settings.php, not config.php, because scripts/release.mjs never uploads a config.php.

const DHEMMYN_CONFIG_DEFAULTS = [
    'mail_enabled' => false,
    'recipient' => '',
    'from' => '',
    'transport' => 'mail',
    'smtp_host' => '',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl',
    'smtp_user' => '',
    'smtp_pass' => '',
    'rate_key' => '',
    'state_dir' => '',
];

/** Reads the settings file. A missing, unreadable or malformed file means "sending off", never an error page. */
function loadConfig(string $path): array
{
    if ($path === '' || !is_file($path) || !is_readable($path)) return DHEMMYN_CONFIG_DEFAULTS;
    try {
        $loaded = (static fn(string $file): mixed => require $file)($path);
    } catch (Throwable) {
        error_log('[dhemmyn enquiry] private config could not be loaded');
        return DHEMMYN_CONFIG_DEFAULTS;
    }
    if (!is_array($loaded)) return DHEMMYN_CONFIG_DEFAULTS;
    $config = DHEMMYN_CONFIG_DEFAULTS;
    foreach ($config as $key => $default) {
        if (array_key_exists($key, $loaded) && gettype($loaded[$key]) === gettype($default)) $config[$key] = $loaded[$key];
    }
    return $config;
}

function isEmailAddress(string $value): bool
{
    return strlen($value) <= 254 && preg_match('/[\r\n\x00<>,;"]/', $value) !== 1 && filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}

/** Sending is on only when it is switched on and everything it needs is there. Values are never shown. */
function sendingReady(array $config): bool
{
    if (($config['mail_enabled'] ?? false) !== true) return false;
    if (!isEmailAddress($config['recipient']) || !isEmailAddress($config['from'])) return false;
    if (strlen($config['rate_key']) < 32 || $config['state_dir'] === '') return false;
    if ($config['transport'] === 'mail') return true;
    if ($config['transport'] !== 'smtp') return false;
    return preg_match('/^[A-Za-z0-9.-]+$/', $config['smtp_host']) === 1
        && $config['smtp_port'] > 0 && $config['smtp_port'] < 65536
        && in_array($config['smtp_secure'], ['ssl', 'tls'], true)
        && $config['smtp_user'] !== '' && $config['smtp_pass'] !== '';
}
