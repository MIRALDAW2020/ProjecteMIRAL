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

  $instruccion = "select contrasenya as cuantos from usuaris where correu = '$email'";
  $resultado = mysqli_query($con, $instruccion);

  while ($fila = $resultado->fetch_array()) {
    $password2 = $fila["cuantos"];
  }

  $instruccion2 = "select correu as cuantos from usuaris where correu = '$email'";
  $resultado2 = mysqli_query($con, $instruccion);

  while ($fila2 = $resultado2->fetch_array()) {
    $email2 = $fila2["cuantos"];
  }

  //Comprovar si coincide el password
  if (!strcmp($password2, $password) == 0) {

    $response->resultado = 'CKO';
    $response->mensaje = 'Contrasenya incorrecta';

  }else if (!strcmp($email2, $email) == 0) {

    $response->resultado = 'EKO';
    $response->mensaje = 'Correu electronic incorrecte';

  } else {

    $response->resultado = 'OK';
    $response->mensaje = 'Has iniciat sessió correctament!';
    // $_SESSION["nombre_logueado"] = $email;

  }

}

?>
