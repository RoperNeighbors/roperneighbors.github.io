<?php

// //print_r($_POST);
// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {

//   // Build POST request:
//   $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
//   $recaptcha_secret = '6LfIrNIUAAAAAADj06LXLnALebDFgYw4qLx6Bo0r';
//   $recaptcha_response = $_POST['recaptcha_response'];

//   // Make and decode POST request:
//   $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
//   $recaptcha = json_decode($recaptcha);

//   // Take action based on the score returned:
//   if ($recaptcha->score >= 0.5) {

//       // Verified - send email
//       $EmailFrom = "Portfolio Website";
//       $EmailTo = "epp.anita@icloud.com";
//       $Subject = "Message from Portfolio Website";
//       $Name = Trim(stripslashes($_POST['name'])); 
//       $Email = Trim(stripslashes($_POST['email'])); 
//       $Message = Trim(stripslashes($_POST['message'])); 

//       // validation
//       $validationOK=true;
//       if (!$validationOK) {
//         print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
//         exit;
//       }

//       // prepare email body text
//       $Body = "";
//       $Body .= "Name: ";
//       $Body .= $Name;
//       $Body .= "\n";
//       $Body .= "Email: ";
//       $Body .= $Email;
//       $Body .= "\n";
//       $Body .= "Message: ";
//       $Body .= $Message;
//       $Body .= "\n";

//       // send email 
//       $success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

//       // redirect to success page 
//       if ($success){
//         print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.html\">";
//       }
//       else{
//         print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
//       }
      
//     } else {
//       echo 'Failed';die;
//     }
//   }

$EmailFrom = "Roper Good Neighbor Fund Website";
$EmailTo = "roperneighbors@gmail.com";
$Subject = "Message via Website";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Tel = Trim(stripslashes($_POST['Phone'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thanks.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>