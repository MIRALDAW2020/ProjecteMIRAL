<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: text/html;charset=utf-8");

require("db.php");
session_start();

// Obtengo los datos cargados en el formulario de login.
$cadena = file_get_contents('php://input');
$json = json_decode($cadena);

$nombre = $json->correu;
$password = $json->pass;

$con = retornarConexion();
class Result {}
$response = new Result();

$instruccion = "select count(*) as cuantos from usuaris where correu = '$nombre'";
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

  $instruccion = "select contrasenya as cuantos from usuaris where correu = '$nombre'";
  $resultado = mysqli_query($con, $instruccion);

  while ($fila = $resultado->fetch_array()) {
    $password2 = $fila["cuantos"];
  }

  //Comprovar si coincide el password
  if (!strcmp($password2, $password) == 0) {

    $response->resultado = 'CKO';
    $response->mensaje = 'Contrasenya incorrecta';

  }else {

    $response->resultado = 'OK';
    $response->mensaje = 'Has iniciat sessió correctament!';
    // $_SESSION["nombre_logueado"] = $email;

  }

}

$resultado = json_encode($response);
echo $resultado;

?>
