<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Content-Type: text/html;charset=utf-8");

  //$casa = "oracle.ilerna.com";
  //$clase = "192.168.3.26";

  function retornarConexion() {

    $con=mysqli_connect("192.168.3.26","DAW2_MIRAL","sector1g","daw2_miral");

    return $con;

  }

?>
