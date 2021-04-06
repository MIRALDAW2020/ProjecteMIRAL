<?php
  //$casa = "oracle.ilerna.com";
  //$clase = "192.168.3.26";

  function retornarConexion() {

    $con=mysqli_connect("192.168.3.26","DAW2_MIRAL","sector1g","daw2_miral");

    return $con;

  }
?>
