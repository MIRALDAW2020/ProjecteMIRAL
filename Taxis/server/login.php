<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: text/html;charset=utf-8");

require("db.php");

// Obtengo los datos cargados en el formulario de login.
$cadena = file_get_contents('php://input');
$json = json_decode($cadena, true);

$email = $json['correu'];
$password = $json['passw'];

$con = retornarConexion();
class Result {}
$response = new Result();

$instruccion = "select count(*) as cuantos from usuaris where correu = '$email'";
$resultado = mysqli_query($con, $instruccion);

//Comprovar que exista
while ($fila = $resultado->fetch_array()) {
  $numero = $fila["cuantos"];
}

if ($numero == 0) {
  // Genere les dades de resposta
  $response->resultado = 'KO';
  $response->mensaje = 'Aquest usuari no existeix';
}else {
  
}

?>
