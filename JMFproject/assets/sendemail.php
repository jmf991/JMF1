<?php
// from the form
$name = trim(strip_tags($_POST['contact-name']));
$email = trim(strip_tags($_POST['contact-email']));
$message = htmlentities($_POST['message']);

// set here
$subject = "Contact form submitted!";
$to = 'javier.martin@jbespoke.com';

$body = <<<HTML
$message
HTML;

$headers = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";

// send the email
mail($to, $subject, $body, $headers);

// redirect afterwords, if needed
header('Location: thanks.html');
?>