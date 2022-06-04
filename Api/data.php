<?php
include 'conectar.php';
//Creamos la conexión con la función de conectar y le damos formato de datos utf8
$conexion = connectDB();

$result = mysqli_query($conexion, "SELECT * FROM Cat");   

   
while($row = mysqli_fetch_assoc($result))
    $test[] = $row; 
print json_encode($test);
?>