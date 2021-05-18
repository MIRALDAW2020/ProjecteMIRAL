<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Content-Type: text/html;charset=utf-8");
  header('Content-Type: application/json');

  $json = file_get_contents('php://input');

  $params = json_decode($json);


  require("db.php");
  $con=retornarConexion();

  $instruccion ="UPDATE usuaris SET 
                    nom ='".$params->nom."',
                    cognom ='".$params->cognom."',
                    telefon ='".$params->telefon."',
                    correu ='".$params->correu."'
                    WHERE correu=$params->correu";

  $response = new stdClass(); 

  if ($con->query($instruccion) === TRUE) {
    // Genere les dades de resposta
    $response->resultado = 'OK';
    $response->mensaje = 'Usuario modificado correctamente!';

  } else if($con->query($instruccion) === FALSE) {
      // Genere les dades de resposta
   $response->resultado = 'KO';
   $response->mensaje = 'Fallo al modificar el usuario';
  }
  echo json_encode($response);
?>