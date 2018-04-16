 <?php
 	$name = $_POST['name'];
 	$visitor_email = $_POST['email'];
 	$message = $_POST['message'];

 	$email_from = 'judyzhong99@hotmail.com';

 	$email_subject = "New Form Submission";

 	$email_body = "You have received a new message from the user $name. \n".

 		"Here is the message: \n $message".