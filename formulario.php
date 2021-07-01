<?php 

    $datos = array(null, null);
    $datos[0] = $_POST['nombreCompleto'];
    $datos[1] = $_POST['cedula'];

    echo $datos[0] . " con cédula " . $datos[1] . ", está inscrito";

?>

