<?php

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);



$to = "mihainuica@gmail.com";
$subject = $data->subject;
$txt = "Nume: ".$data->name. "\r\n" .$data->content;
$headers = "From: " . $data->email; 

$consent = $data->subscribe;


$response = json_encode($data);

echo($response);

mail($to,$subject,$txt,$headers);

?>