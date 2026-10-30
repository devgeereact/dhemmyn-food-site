<?php

declare(strict_types=1);

// A minimal SMTP client (implicit TLS on 465, or STARTTLS on 587; AUTH LOGIN), used only when the private
// settings choose 'transport' => 'smtp'. The conversation runs over a channel so the tests can replay a
// scripted server without a network (backend/tests/enquiry.test.php).

interface SmtpChannel
{
    public function send(string $line): void;
    /** @return array{0: int, 1: string} the reply code and text (multi-line replies joined) */
    public function reply(): array;
    public function startTls(): bool;
    public function close(): void;
}

final class SocketSmtpChannel implements SmtpChannel
{
    /** @var resource */
    private $stream;

    public function __construct(string $host, int $port, bool $implicitTls, int $timeout = 15)
    {
        $context = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true, 'peer_name' => $host]]);
        $target = ($implicitTls ? 'ssl://' : 'tcp://') . $host . ':' . $port;
        $stream = @stream_socket_client($target, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);
        if ($stream === false) throw new RuntimeException('SMTP connection failed.');
        stream_set_timeout($stream, $timeout);
        $this->stream = $stream;
    }

    public function send(string $line): void
    {
        if (fwrite($this->stream, $line . "\r\n") === false) throw new RuntimeException('SMTP write failed.');
    }

    public function reply(): array
    {
        $text = '';
        while (($line = fgets($this->stream, 1024)) !== false) {
            $text .= $line;
            if (strlen($line) < 4 || $line[3] !== '-') break;
        }
        return [(int) substr($text, 0, 3), $text];
    }

    public function startTls(): bool
    {
        return stream_socket_enable_crypto($this->stream, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT) === true;
    }

    public function close(): void
    {
        fclose($this->stream);
    }
}

/** Runs one SMTP conversation. Returns true only when the server accepted the message for delivery. */
function smtpDeliver(SmtpChannel $channel, array $config, string $to, string $data): bool
{
    $expect = static function (array $codes) use ($channel): void {
        [$code] = $channel->reply();
        if (!in_array($code, $codes, true)) throw new RuntimeException('SMTP refused (' . $code . ').');
    };
    $ehlo = 'EHLO dhemmynfood.mimmycare.com';
    try {
        $expect([220]);
        $channel->send($ehlo);
        $expect([250]);
        if ($config['smtp_secure'] === 'tls') {
            $channel->send('STARTTLS');
            $expect([220]);
            if (!$channel->startTls()) throw new RuntimeException('STARTTLS failed.');
            $channel->send($ehlo);
            $expect([250]);
        }
        $channel->send('AUTH LOGIN');
        $expect([334]);
        $channel->send(base64_encode($config['smtp_user']));
        $expect([334]);
        $channel->send(base64_encode($config['smtp_pass']));
        $expect([235]);
        $channel->send('MAIL FROM:<' . $config['from'] . '>');
        $expect([250]);
        $channel->send('RCPT TO:<' . $to . '>');
        $expect([250, 251]);
        $channel->send('DATA');
        $expect([354]);
        // Dot-stuffing: a line that starts with "." gets a second one (RFC 5321, 4.5.2).
        $channel->send(preg_replace('/^\./m', '..', $data) . "\r\n.");
        $expect([250]);
        $channel->send('QUIT');
        return true;
    } catch (RuntimeException) {
        try { $channel->send('QUIT'); } catch (RuntimeException) { /* The server already went away. */ }
        return false;
    } finally {
        $channel->close();
    }
}
