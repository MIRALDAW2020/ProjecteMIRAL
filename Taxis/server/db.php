<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  //$casa = "oracle.ilerna.com";
  //$clase = "192.168.3.26";

  function retornarConexion() {

    $con=mysqli_connect("oracle.ilerna.com","DAW2_MIRAL","sector1g","daw2_miral");

    return $con;

  }

?>
