import { AdministradorService } from './../../services/administrador.service';
import { VerUsuarios } from './../../models/verUsuarios';
import { Usuario } from './../../models/usuario.model';
import { verReserva } from './../../models/verReserva.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  verUsuariosbool:Boolean =false;
    verReservas:Boolean = false;

verUsuarios!:VerUsuarios[];

sesion: String = "hola123";


  constructor(
  
private verUsuariosService: AdministradorService


  ) { }

  ngOnInit(): void {


  }


  btnVerUsuarios(){
    this.verUsuariosbool=true;
    this.verReservas=false;

    console.log("usuarios @@@@@@");
  



    this.verUsuariosService.verUsuariosService(this.sesion).subscribe(
      (respServidor: any) => {
       
        this.verUsuarios = respServidor;

        console.log(this.verUsuarios);


    
      },
      (error: any) => {
        console.log(error);
      }
    )

    



  }


  btnVerReservas(){
    this.verUsuariosbool=false;
    this.verReservas=true;
    console.log("reservas");

  }
}
