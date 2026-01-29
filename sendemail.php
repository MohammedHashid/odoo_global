<?php

// ===============================
// Oodo Global - Contact Form Mailer
// ===============================

define("RECIPIENT_EMAIL", "info@prajai.com");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $userName    = isset($_POST['username']) ? strip_tags(trim($_POST['username'])) : "";
    $senderPhone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : "";
    $senderEmail = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : "";
    $industry    = isset($_POST['industry']) ? strip_tags(trim($_POST['industry'])) : "";
    $message     = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : "";

    if (!empty($userName) && !empty($senderPhone) && !empty($senderEmail)) {

        if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
            header("Location: contact.html?message=InvalidEmail");
            exit;
        }

        $subject = "New Inquiry - Oodo Global Website";

        $emailContent  = "New Website Inquiry\n";
        $emailContent .= "---------------------------------\n";
        $emailContent .= "Name     : $userName\n";
        $emailContent .= "Phone    : $senderPhone\n";
        $emailContent .= "Email    : $senderEmail\n";
        $emailContent .= "Industry : $industry\n";
        $emailContent .= "---------------------------------\n\n";
        $emailContent .= "Message:\n$message\n";

        // IMPORTANT: From must be your domain email (Hostinger requirement)
        $headers  = "From: info@prajai.com\r\n";
        $headers .= "Reply-To: $senderEmail\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        if (mail(RECIPIENT_EMAIL, $subject, $emailContent, $headers)) {
            header("Location: contact.html?message=Success");
            exit;
        } else {
            header("Location: contact.html?message=Failed");
            exit;
        }

    } else {
        header("Location: contact.html?message=MissingFields");
        exit;
    }

} else {
    header("Location: contact.html");
    exit;
}
?>
