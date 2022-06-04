<?php

function connectDB(){

    $server = "localhost";
    $user = "id19020693_root";
    $pass = "AnaFlores99!";
    $bd = "id19020693_test";


    $conexion = mysqli_connect($server, $user, $pass,$bd) 
        or die("Ha sucedido un error inexperado en la conexion de la base de datos");

    return $conexion;
}                                                  

function disconnectDB($conexion){

    $close = mysqli_close($conexion) 
        or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    return $close;
}

?>