<?php


$name = "";
$email = "";
$msg = "";
$counter = 0;


if (isset($_POST['submit'])) {

    if (empty($_POST["user_name"])) {
        $counter++;
    } else {
        $name = $_POST["user_name"];
    }

    if (empty($_POST["user_mail"])) {
        $counter++;
    } else {
        $email = $_POST["user_mail"];
    }

    if (empty($_POST["user_message"])) {
        $counter++;
    } else {
        $msg_body = $_POST["user_message"];
    }


    if ($counter == 0) {
        $msg =  $msg_body . "\n" . $name . "\n" . $email;
        mail("contact@augustindumont.be", "Vous avez un message", $msg, "From: noreply@augustindumont.be");
        header("Location:index.html#$MainBackground");
    }
}
