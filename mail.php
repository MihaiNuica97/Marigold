<?php

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);



$to = "mihainuica@gmail.com";
$subject = filter_var($data->subject, FILTER_SANITIZE_STRING);
$txt = "Nume: ". strip_tags($data->name) . "\r\n" . strip_tags($data->content);
$headers = "From: " . filter_var($data->email, FILTER_SANITIZE_EMAIL); 

$consent = $data->subscribe;


$response = json_encode($data);

echo($response);

mail($to,$subject,$txt,$headers);

?>