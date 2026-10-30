<?php

declare(strict_types=1);

// Validates one order request and builds the email to the owner. The forms, field names and labels
// match src/data/forms.ts. The checks repeat the browser's (src/components/EnquiryForm.tsx), because a
// request can come from anywhere.

const DHEMMYN_FORMS = [
    'custom-cakes' => [
        'title' => 'Custom cake',
        'fields' => [
            'name' => ['Name', 'line'], 'email' => ['Email', 'line'], 'phone' => ['Phone number', 'line'],
            'date' => ['Date needed', 'date'], 'occasion' => ['Occasion', 'line'], 'servings' => ['Number of servings', 'whole'],
            'ideas' => ['Flavour and design ideas', 'text'], 'allergies' => ['Allergies', 'text'],
        ],
    ],
    'catering' => [
        'title' => 'Small chops or catering',
        'fields' => [
            'name' => ['Name', 'line'], 'email' => ['Email', 'line'], 'phone' => ['Phone number', 'line'],
            'date' => ['Event date', 'date'], 'guests' => ['Number of guests', 'whole'], 'town' => ['Town', 'line'],
            'food' => ['Food wanted', 'text'], 'allergies' => ['Allergies', 'text'],
        ],
    ],
];
const DHEMMYN_LINE_LIMIT = 200;
const DHEMMYN_TEXT_LIMIT = 5000;

function invalid(string $message): never
{
    throw new InvalidArgumentException($message);
}

function looksLikePhone(string $value): bool
{
    $digits = strlen(preg_replace('/\D/', '', $value) ?? '');
    return preg_match('/^[+()\d\s-]+$/D', $value) === 1 && $digits >= 7 && $digits <= 15;
}

/**
 * Checks a decoded JSON body. $earliest is the first date that may be asked for (YYYY-MM-DD); the
 * endpoint passes yesterday in UTC so a visitor in another time zone is not refused at midnight.
 *
 * @return array{form: string, reference: string, subject: string, body: string, replyTo: string, contact: string}
 */
function prepareEnquiry(array $input, string $earliest, ?int $now = null): array
{
    $formName = $input['form'] ?? '';
    if (!is_string($formName) || !isset(DHEMMYN_FORMS[$formName])) invalid('Choose a valid form.');
    $form = DHEMMYN_FORMS[$formName];
    $allowed = array_merge(['form', 'website'], array_keys($form['fields']));
    foreach ($input as $key => $value) {
        if (!in_array($key, $allowed, true)) invalid('Please check the form fields.');
        if (!is_string($value)) invalid('Please check the form fields.');
    }
    // The spam trap: a hidden field a person never sees or fills in.
    if (trim($input['website'] ?? '') !== '') invalid('Unable to accept this request.');

    $values = [];
    foreach ($form['fields'] as $key => [, $kind]) {
        // Checked before trim(), which would strip a trailing null byte and hide it.
        if (str_contains($input[$key] ?? '', "\0")) invalid('Please check the form fields.');
        $value = trim($input[$key] ?? '');
        if ($kind !== 'text' && (preg_match('/[\r\n]/', $value) === 1 || strlen($value) > DHEMMYN_LINE_LIMIT)) invalid('Please check the form fields.');
        if ($kind === 'text' && strlen($value) > DHEMMYN_TEXT_LIMIT) invalid('A box is too long. Please shorten it.');
        if ($kind === 'whole' && $value !== '' && preg_match('/^\d{1,5}$/D', $value) !== 1) invalid('Use a whole number, for example 12.');
        $values[$key] = $value;
    }
    if ($values['name'] === '') invalid('Add your name.');
    if ($values['email'] === '' && $values['phone'] === '') invalid('Add an email or a phone number so I can reply.');
    if ($values['email'] !== '' && !isEmailAddress($values['email'])) invalid('Check the email address. It should look like name@example.com.');
    if ($values['phone'] !== '' && !looksLikePhone($values['phone'])) invalid('Check the phone number.');
    $date = $values['date'];
    if (preg_match('/^(\d{4})-(\d{2})-(\d{2})$/D', $date, $m) !== 1 || !checkdate((int) $m[2], (int) $m[3], (int) $m[1])) invalid('Add the date.');
    if ($date < $earliest) invalid('Choose a date that has not passed.');

    $now ??= time();
    $reference = 'DF-' . gmdate('Ymd', $now) . '-' . strtoupper(bin2hex(random_bytes(4)));
    $lines = [
        'New order request from the ' . $form['title'] . ' form on dhemmynfood.mimmycare.com.',
        'Reference: ' . $reference,
        'Received: ' . gmdate('l j F Y, H:i', $now) . ' UTC',
        '',
    ];
    foreach ($form['fields'] as $key => [$label, $kind]) {
        $value = $values[$key] === '' ? '(left empty)' : $values[$key];
        $lines[] = $kind === 'text' ? $label . ":\n" . $value . "\n" : $label . ': ' . $value;
    }
    $lines[] = '';
    $lines[] = $values['email'] !== ''
        ? 'Reply to this email to answer: the visitor\'s address is set as the reply address.'
        : 'The visitor left no email: ring or message them on the phone number above.';
    $lines[] = 'Delete this request 6 months after your last message with this person (docs/05-security/DATA-PRIVACY.md).';
    return [
        'form' => $formName,
        'reference' => $reference,
        // Fixed wording only: nothing the visitor typed goes into a header.
        'subject' => 'Order request: ' . $form['title'] . ' [' . $reference . ']',
        'body' => implode("\n", $lines) . "\n",
        'replyTo' => $values['email'],
        'contact' => $values['email'] !== '' ? strtolower($values['email']) : preg_replace('/\D/', '', $values['phone']),
    ];
}
