<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Content-Type: text/html;charset=utf-8");
  header('Content-Type: application/json');

  $json = file_get_contents('php://input');

  $params = json_decode($json);


  require("db.php");
  $con=retornarConexion();

  mysqli_query($con,"update usuaris set nom='$params->nom',
                                        cognom='$params->cognom',
                                        telefon='$params->telefon',
                                        correu='$params->correu'
                                        where correu=$params->correu");


  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Datos guardados';

  echo json_encode($response);
