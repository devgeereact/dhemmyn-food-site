<?php

declare(strict_types=1);

// Builds the owner email and hands it to a transport. One message, to the owner only: nothing is sent to
// the address the visitor typed, so the form can never relay text to someone else's inbox.

/** @return array{headers: array<string,string>, body: string} */
function buildEmail(array $enquiry, array $config, ?int $now = null): array
{
    $now ??= time();
    $headers = [
        'Date' => gmdate('D, d M Y H:i:s', $now) . ' +0000',
        'From' => 'Dhemmyn Food website <' . $config['from'] . '>',
        'Message-ID' => '<' . strtolower($enquiry['reference']) . '.' . bin2hex(random_bytes(6)) . '@dhemmynfood.mimmycare.com>',
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'Content-Transfer-Encoding' => 'base64',
        'Auto-Submitted' => 'auto-generated',
    ];
    // Only an address that passed isEmailAddress() can be the reply address.
    if ($enquiry['replyTo'] !== '' && isEmailAddress($enquiry['replyTo'])) $headers['Reply-To'] = $enquiry['replyTo'];
    return ['headers' => $headers, 'body' => rtrim(chunk_split(base64_encode($enquiry['body']), 76, "\r\n"))];
}

/**
 * $send($to, $subject, $body, $headers): bool is the transport. The real ones come from makeTransport().
 *
 * @return array{ok: bool, reference?: string}
 */
function deliverEnquiry(array $enquiry, array $config, callable $send): array
{
    $email = buildEmail($enquiry, $config);
    $accepted = (bool) $send($config['recipient'], $enquiry['subject'], $email['body'], $email['headers']);
    return $accepted ? ['ok' => true, 'reference' => $enquiry['reference']] : ['ok' => false];
}

/** The transport the private settings choose: PHP mail() through the host, or SMTP with a login. */
function makeTransport(array $config, ?callable $connect = null): callable
{
    if ($config['transport'] === 'smtp') {
        $connect ??= static fn(array $c): SmtpChannel => new SocketSmtpChannel($c['smtp_host'], $c['smtp_port'], $c['smtp_secure'] === 'ssl');
        return static function (string $to, string $subject, string $body, array $headers) use ($config, $connect): bool {
            $all = ['To' => $to, 'Subject' => $subject] + $headers;
            $data = '';
            foreach ($all as $name => $value) $data .= $name . ': ' . $value . "\r\n";
            return smtpDeliver($connect($config), $config, $to, $data . "\r\n" . $body);
        };
    }
    return static fn(string $to, string $subject, string $body, array $headers): bool
        => @mail($to, $subject, $body, $headers, '-f' . $config['from']);
}
