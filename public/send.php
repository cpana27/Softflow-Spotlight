<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST["name"] ?? '');
  $email = filter_var($_POST["email"] ?? '', FILTER_VALIDATE_EMAIL);
  $message = htmlspecialchars($_POST["message"] ?? '');
  $company = htmlspecialchars($_POST["company"] ?? '');
  $phone = htmlspecialchars($_POST["phone"] ?? '');

  if (!$name || !$email || !$message) {
    http_response_code(400);
    echo "Ungültige Eingabe";
    exit;
  }

  $to = "christian.pana@softflow.dev"; // Zieladresse
  $subject = "Neue Kontaktanfrage von $name";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  $body = "Name: $name\nE-Mail: $email\n";
  if ($company) $body .= "Unternehmen/Privat: $company\n";
  if ($phone) $body .= "Telefon: $phone\n";
  $body .= "Nachricht:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "OK";
  } else {
    http_response_code(500);
    echo "Fehler beim Senden";
  }
} else {
  http_response_code(405);
  echo "Nur POST erlaubt";
}
?>