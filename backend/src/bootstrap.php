<?php

declare(strict_types=1);

// Loads the private enquiry code. Plain functions, no Composer: the endpoint has no dependencies.
require __DIR__ . '/settings.php';
require __DIR__ . '/enquiry.php';
require __DIR__ . '/smtp.php';
require __DIR__ . '/delivery.php';
require __DIR__ . '/rate-limit.php';
require __DIR__ . '/endpoint.php';
