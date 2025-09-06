
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['Email'])) {

    $email_to = "hugoseguin111@gmail.com";
    $email_subject = "New form submission";

    function problem($error) {
        echo "<p style='color:red; font-weight:bold;'>We're sorry, but there were error(s) with the form:</p>";
        echo "<p>$error</p>";
        echo "<p><a href='javascript:history.back()'>Go Back</a></p>";
        exit;
    }

    if (empty($_POST['Name']) || empty($_POST['Email']) || empty($_POST['Message'])) {
        problem("All fields are required.");
    }

    $name = trim($_POST['Name']);
    $email = trim($_POST['Email']);
    $message = trim($_POST['Message']);
    $error_message = "";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message .= "The email address you entered is invalid.<br>";
    }

    if (!preg_match("/^[A-Za-zÀ-ÿ .'-]+$/u", $name)) {
        $error_message .= "The name you entered is invalid.<br>";
    }

    if (strlen($message) < 2) {
        $error_message .= "The message you entered is too short.<br>";
    }

    if (!empty($error_message)) {
        problem($error_message);
    }

    function clean_string($string) {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_ireplace($bad, "", $string);
    }

    $email_message = "Form details below:\n\n";
    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Message:\n" . clean_string($message) . "\n";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($email_to, $email_subject, $email_message, $headers)) {
        echo "<p>✅ Thanks for getting in touch, $name. We'll get back to you soon.</p>";
    } else {
        echo "<p style='color:red;'>❌ Sorry, there was a problem sending your message. Please try again later.</p>";
    }
}
?>
