<?php

declare(strict_types=1);

// Sample of the private settings file. Key names only: never put real values in this repository.
// On the server the real file is ~/private-config/dhemmyn/config.php (mode 0600, folder 0700), created
// by ~/Backups/scripts/dhemmyn-server-setup.zsh --apply with sending off. The owner fills it in by hand,
// over SSH, when the mailbox is ready (docs/07-operations/DEPLOYMENT.md, "Switching sending on").
// Sending stays OFF unless 'mail_enabled' is true AND every value it needs is filled in.

return [
    'mail_enabled' => false,   // true switches online sending on
    'recipient' => '',         // the inbox that receives order requests
    'from' => '',              // the sender address, a mailbox on a domain this host may send for
    'transport' => 'mail',     // 'mail' (the host's own mail) or 'smtp'
    'smtp_host' => '',         // smtp only
    'smtp_port' => 465,        // smtp only: 465 with 'ssl', 587 with 'tls'
    'smtp_secure' => 'ssl',    // smtp only: 'ssl' or 'tls'
    'smtp_user' => '',         // smtp only
    'smtp_pass' => '',         // smtp only
    'rate_key' => '',          // at least 32 random characters (the setup script fills it in on the server)
    'state_dir' => '',         // a private writable folder outside the web root, for rate limits
];
