<?php

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);



$to = "contact@salonmarigold.ro";
// $to = "mihainuica@gmail.com";
$subject = filter_var($data->subject, FILTER_SANITIZE_STRING);
$txt = "Nume: ". strip_tags($data->name) . "\r\n" . strip_tags($data->content);
$headers = "From: " . filter_var($data->email, FILTER_SANITIZE_EMAIL); 



$consent = $data->subscribe;
// $consent = true;


$response = json_encode($data);

echo($response);

mail($to,$subject,$txt,$headers);

if ($consent) {
    // API to mailchimp ########################################################
    $list_id = '9c730561d7';
    $authToken = '3884e0b5541ae2a2dde5a78249f92775-us4';
    // The data to send to the API

    $postData = array(
        "email_address" => $data->email, 
        "status" => "subscribed", 
        "merge_fields" => array(
        "FNAME"=> $data->name,
        )
    );

    // Setup cURL
    $ch = curl_init('https://us4.api.mailchimp.com/3.0/lists/'.$list_id.'/members/');
    curl_setopt_array($ch, array(
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_HTTPHEADER => array(
            'Authorization: apikey '.$authToken,
            'Content-Type: application/json'
        ),
        CURLOPT_POSTFIELDS => json_encode($postData)
    ));
    // Send the request
    $response = curl_exec($ch);
    // #######################################################################
    echo($response);
}


?>