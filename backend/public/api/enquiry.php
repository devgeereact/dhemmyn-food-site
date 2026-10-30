<?php

declare(strict_types=1);

// The only public PHP file. It answers POST /api/enquiry.php for the Custom cakes and Catering forms.
// The real code lives outside the web root. On cPanel this file sits in ~/dhemmynfood.mimmycare.com/api/,
// so two levels up is the home folder: the code is in ~/apps/dhemmyn/current/src and the private
// settings in ~/private-config/dhemmyn/config.php. Only PHP's local development server (php -S) uses
// the repository layout instead (backend/src, and no settings file, so sending stays off).
ini_set('display_errors', '0');

$base = dirname(__DIR__, 2);
$isDev = PHP_SAPI === 'cli-server';
$privateDir = $isDev ? $base : $base . '/apps/dhemmyn/current';
$configPath = $isDev ? '' : $base . '/private-config/dhemmyn/config.php';

if (!is_file($privateDir . '/src/bootstrap.php')) {
    // Paths stay in the server log only. The visitor sees the same answer as any outage.
    error_log('[dhemmyn enquiry] backend not installed');
    header_remove('X-Powered-By');
    http_response_code(503);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo '{"ok":false,"error":{"code":"unavailable","message":"Online sending is temporarily unavailable. Nothing was sent."}}';
    exit;
}

require $privateDir . '/src/bootstrap.php';
handleEnquiryRequest($configPath, $isDev);
