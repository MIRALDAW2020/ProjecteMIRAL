<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Content-Type: text/html;charset=utf-8");
  header('Content-Type: application/json');

  $json = file_get_contents('php://input');//Recibe el json de angular
  $params = json_decode($json);

  // echo $params;


  require("db.php");
  session_start();
  $con = retornarConexion();

  // class Result{}
  $response = new stdClass();

  $date = date('Y-m-d H:i:s');


  $instruccion ="insert into reserva_taxi (nom_usuari,correu_electronic,empresa_taxi,nom_parada,fecha_reserva)
  VALUES ('$params->nom','$params->correu','$params->empresa','$params->parada','$date')";

  // "insert into usuaris (nom, cognom, telefon, correu, contrasenya)
  // values ('$params->nom','$params->cognoms','$params->telefon','$params->correu','$params->password')"


  // $res = mysqli_query($con,$instruccion);
  // $datos = mysqli_fetch_assoc($res);



  if ($con->query($instruccion) === TRUE) {
     // Genere les dades de resposta
     $response->resultado = 'OK';
     $response->mensaje = 'Reserva creada correctament, Enhorabona!';

  } else if($con->query($instruccion) === FALSE) {
       // Genere les dades de resposta
    $response->resultado = 'KO';
    $response->mensaje = 'Fallo en insertar la reserva :fecha:  '.$date;
  }
  echo json_encode($response); // MUESTRA EL JSON GENERADO











  // if ($datos['rows'] == 0){

  //   mysqli_query(
  //     $con,
  //     "insert into reserva_taxi (nom_usuari, correu_electronic, empresa_taxi, parada_taxi)
  //     values ('$params->nom', '$params->correu', $params->empresa, $params->parada)"
  //   );

  //   // Genere les dades de resposta
  //   $response->resultado = 'OK';
  //   $response->mensaje = 'Reserva creada correctament, Enhorabona!';

  // }else{

  //   // mysqli_query(
  //   //   $con,
  //   //   "insert into reserva_taxi (nom_usuari, correu_electronic, empresa_taxi, parada_taxi)
  //   //   values ('$params->nom', '$params->correu', $params->empresa, $params->parada)"
  //   // );

  //   // Genere les dades de resposta
  //   $response->resultado = 'OK';
  //   $response->mensaje = 'Fallo en insertar la reserva';

  // }

  // $con.close();

?>
