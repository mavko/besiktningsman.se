<?php

/* SETTINGS */
$yourEmail = "sebastian.selling@outlook.com";
$emailSubject = "Besiktningsman.se Formulär";

if($_POST){

  /* DATA FROM HTML FORM */
  $name = $_POST['yourName'];
  $email = $_POST['yourEmail'];
  $phone = $_POST['yourPhone'];
  $message = $_POST['yourMessage'];
  $headers = "From: $name <$email>\r\n" .
             "Reply-To: $name <$email>\r\n" .
             "Subject: $emailSubject\r\n" .
             "Content-type: text/plain; charset=UTF-8\r\n" .
             "MIME-Version: 1.0\r\n" .
             "X-Mailer: PHP/" . phpversion() . "\r\n";

  /* SEND EMAIL */
  mail($yourEmail, $emailSubject, $message, $headers);
}
?>
