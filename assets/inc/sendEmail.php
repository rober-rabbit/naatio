<?php



// Replace this with your own email address

$siteOwnersEmail = 'hola@naatio.com';



if($_POST) {


	//capturamos los  input
	$name = trim(stripslashes($_POST['name']));

	$email = trim(stripslashes($_POST['email']));
	
	$whatsapp = trim(stripslashes($_POST['whatsapp']));

	$enterprise = trim(stripslashes($_POST['enterprise']));

	$contact_message = trim(stripslashes($_POST['message']));

	//array de errores
	$error = array();



	// Check Name

	if (strlen($name) < 2) {

		$error['name'] = "Por favor ingrese su nombre completo.";

	}

	// Check Email

	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {

		$error['email'] = "Por favor ingrese un correo valido.";

	}

	// Check Message

	if (strlen($contact_message) < 15) {

		$error['message'] = "Describa un poco más su mensaje.";

	}

	// enterprise

	if ($enterprise == '') {

		$enterprise = "Anonimo";

	}





	// Set Message

	$message = "Correo de: " . $name . "\r\n";

	$message .= "Correo electronico: " . $email . "\r\n";

	$message .= "Whatsapp: " . $whatsapp . "\r\n";

	$message .= "Mensaje: \r\n";

	$message .= $contact_message;

	$message .= "\r\n ----- \r\n Este correo ha sido enviado desde naatio.com. \r\n";



	// Set From: header

	$from =  $name . " <" . $email . ">";



	// Email Headers

	$headers = "From: " . $from . "\r\n";

	$headers .= "Reply-To: ". $email . "\r\n";

	$headers .= "MIME-Version: 1.0\r\n";

	$headers .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";





	if ( empty($error) ) {



		ini_set("sendmail_from", $siteOwnersEmail); // for windows server

		$mail = mail($siteOwnersEmail, "Mensaje de contacto", $message, $headers);



		if ($mail) {

			$error['OK'] = "done";
			echo json_encode($error);

		} else {

			$error['sending'] = "Algo salio mal, intenta de nuevo.";

			echo json_encode($error);

		}



	} # end if - no validation error



	else {
		echo json_encode($error);

	} # end else - there was a validation error
	
	header("Location:https://naatio.com");

}



?>