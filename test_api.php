<?php
$url = 'http://localhost:8000/api/home-services/1';
$data = json_encode(['is_active' => false]);
$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\nAccept: application/json\r\n",
        'method'  => 'PUT',
        'content' => $data,
        'ignore_errors' => true // so we can read 4xx/5xx responses
    ]
];
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
var_dump($http_response_header);
echo "\nResponse:\n";
echo $result;
