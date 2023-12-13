<?php
// URL de la API
$apiUrl = "http://212.227.227.190:3000/getParties?latitude=$latitude&longitude=$longitude&date_time=$date_time";

$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$date_time = $_POST['date_time'];

// Realizar la solicitud HTTP
$response = file_get_contents($apiUrl);

// Decodificar los datos JSON
$data = json_decode($response, true);

// Verificar si la decodificación fue exitosa
if ($data === null) {
    // La decodificación falló, manejar el error
    die('Error al decodificar los datos JSON');
}

echo json_encode($data);

?>
