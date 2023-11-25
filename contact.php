<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = $_POST['subject'];

$to = 'yourmail@gmail.com';

$from = 'no-reply@yourmail.com';

if($name && $email && $phone && $message && $subject) {
		$headers = "From:  $from \r\n";
		$headers .= "Reply-To:  $name<$email> \r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";
		$res = mail($to, $message, $headers);
		if($res){
		echo 'Your Message has been sent successfully!';
	} else {
		echo 'Something went wrong, Please Try Again.';
	}
} else {
	echo 'All Fields are Required.';
}