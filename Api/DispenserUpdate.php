
<?php
include 'conectar.php';
//Creamos la conexión con la función de conectar y le damos formato de datos utf8
$conexion = connectDB();



$dispenser = $_POST["dispenser"];
$query = "update Dispenser set dispenser = '$dispenser' where id = 1";
$response = $conexion->query($query);
disconnectDB($conexion);
echo json_encode($response)

?>