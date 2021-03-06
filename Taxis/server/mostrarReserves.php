<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: text/html;charset=utf-8");
    header('Content-Type: application/json');



  // recoje los datos que le pasa el service en formato json
  $json = file_get_contents('php://input');

  // guardamos en la variable params los datos descodificados que recojemos del JSON que os manda el ts
  $params = json_decode($json);

  // importamos el archivo con la conexión a la BD
  require_once 'db.php';

  // creamos la conexión
  $conexion = retornarConexion();

  // realizamos la query a la BD
  $query =  "SELECT * FROM reserva_taxi WHERE correu='$params'";
  $resultado = mysqli_query($conexion, $query);

  // inciamos la variable $datos como array donde vamos a guardar los datos que obt4engamos de la consulta
  $datos = [];

  // bucle para que guarde los datos encontrados con el select de la consulta en el array
  while ($row = mysqli_fetch_assoc($resultado)) {
    $datos[] = $row;

  // cerramos la conexión a la BD
  $conexion->close();

  print json_encode($datos);
  }
?>
