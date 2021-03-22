<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');//Recibe el json de angular
  $params = json_decode($json);

  require("db.php");
  session_start();
  $con = retornarConexion();
  //  *********** Comprovacion Conexion BBDD ***********
  // if (!$con) {
  //   die("No se ha podido realizar la corrección ERROR:" . mysqli_connect_error() . "<br>");
  // }else {
  //   mysqli_set_charset ($con, "utf8");
  //   echo "Se ha conectado a la base de datos" . "<br>";
  // }

  class Result{}
  $response = new Result();

  $instruccion = "select count(*) as 'rows' from usuaris where correu = '$params->correu'";
  $res = mysqli_query($con,$instruccion);
  $datos = mysqli_fetch_assoc($res);

  if ($datos['rows'] == 0) {

    // Insertem a la BBDD
    mysqli_query(
      $con,
      "insert into usuaris (nom, cognom, telefon, correu, contrasenya)
      values ('$params->nom','$params->cognoms','$params->telefon','$params->correu','$params->password')"
    );

    // Genere les dades de resposta
    $response->resultado = 'OK';
    $response->mensaje = 'Usuari registrat correctament, Enhorabona!';

  }else{

    // Genere les dades de resposta
    $response->resultado = 'KO';
    $response->mensaje = 'Usuari ja registrat!';

  }

  header('Content-Type: application/json');
  echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
