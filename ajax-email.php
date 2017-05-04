<?php

/* SETTINGS */
$yourEmail = "sebastian.selling@outlook.com";
$emailSubject = "www.besiktningsman.se: nytt meddelande";

if($_POST){

  /* DATA FROM HTML FORM */
  $name = $_POST['yourName'];
  $email = $_POST['yourEmail'];
  $phone = $_POST['yourPhone'];
  $message = $_POST['yourMessage'].$phone;
  $emailSubject = $emailSubject . " från " . $name;

  $headers = "From: $name <$email>\r\n" .
             "Reply-To: $name <$email>\r\n" .
             "Subject: $emailSubject\r\n" .
             "Content-type: text/plain; charset=UTF-8\r\n" .
             "MIME-Version: 1.0\r\n" .
             "X-Mailer: PHP/" . phpversion() . "\r\n";

  /* PREVENT EMAIL INJECTION */
  if ( preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email) ) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("500 Internal Server Error");
  }

  /* SEND EMAIL */
  mail($yourEmail, $emailSubject, $message, $headers);
}
?>
