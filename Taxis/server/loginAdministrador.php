<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

// cargo el contenido en el formato json desde angular
$json = file_get_contents('php://input');
// echo $json;
// modifico el formato para operar con los datos de angular en php
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require 'db.php';

// creamos la conexión
$con = retornarConexion();

$query = "SELECT * from administradores WHERE correu='$params->correu' AND contrasenya='$params->contrasenya'";


$resultado = mysqli_query($con, $query);

// echo $resultado;
//array donde se van a guardar los datos
$datos = [];


// mientras hayan filas se guardan en la variable $row desde el resultado
while($row = mysqli_fetch_assoc($resultado)) {
  // paso los datos de row en datos
  $datos[] = $row;

  // aqui vamos a poner la variable de sesion "CREO"
  $conectado = true;
}

$respuesta = new \stdClass();

//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
if (count($datos) === 0) {
  $respuesta->resultado = "KO";
  $respuesta->msg = "Verifica el nick y/o la contraseña y vuelve a intentarlo";
  $respuesta->datos = [];
  echo json_encode($respuesta);
} else {
  $respuesta->resultado = "OK";
  $respuesta->msg = "Usuario correcto";
  $respuesta->datos = $datos;
  echo json_encode($respuesta);
}
$con->close();
?>
