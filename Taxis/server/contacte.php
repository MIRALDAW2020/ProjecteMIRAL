<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Content-Type: text/html;charset=utf-8");
  header('Content-Type: application/json');

  $json = file_get_contents('php://input');//Recibe el json de angular
  $params = json_decode($json);

  require("db.php");
  session_start();
  $con = retornarConexion();

  class Result{}
  $response = new Result();

  $instruccion = "select count(*) as 'rows' from contacte where email = '$params->email'";
  $res = mysqli_query($con,$instruccion);
  $datos = mysqli_fetch_assoc($res);

  if ($datos['rows'] == 0){

    mysqli_query(
      $con,
      "insert into contacte (nom_cognoms, email, missatge)
      values ('$params->name','$params->email','$params->message')"
    );

    // Genere les dades de resposta
    $response->resultado = 'OK';
    $response->mensaje = 'Missatge enviat correctament, Enhorabona!';

  }else{

    mysqli_query(
      $con,
      "insert into contacte (nom_cognoms, email, missatge)
      values ('$params->name','$params->email','$params->message')"
    );

    // Genere les dades de resposta
    $response->resultado = 'OK';
    $response->mensaje = 'Missatge enviat correctament, Enhorabona!';

  }

  echo json_encode($response); // MUESTRA EL JSON GENERADO

?>
