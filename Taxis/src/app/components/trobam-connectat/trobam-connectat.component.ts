import { verReserva } from 'src/app/models/verReserva.model';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Reserve } from 'src/app/models/reserva.models';
import {ReservaService} from 'src/app/services/reserva.service';

import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { date } from '@rxweb/reactive-form-validators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trobam-connectat',
  templateUrl: './trobam-connectat.component.html',
  styleUrls: ['./trobam-connectat.component.css'],
})
export class TrobamConnectatComponent implements OnInit {


  sesion = environment.varsesion;


  submited = false;
  nuevaReserva!: Reserve;
  reservaHtml!: FormGroup;

  verReservas!: verReserva[];


  listarRankingsAlumno!: UsuarioService

  constructor(
    private formBuilder: FormBuilder,
    private reservaService: UsuarioService,

    private verReservaService: UsuarioService,
    )
  {}

  submitted = false;

  ngOnInit(): void {
    this.reservaHtml=this.formBuilder.group({
      nombres: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      parada: ['', [Validators.required]]
    })




      this.verReservaService.pedirListaReservasUsuario(this.sesion).subscribe(
        (respServidor: any) => {
         
          this.verReservas = respServidor;
  
          console.log(this.verReservas);


      
        },
        (error: any) => {
          console.log(error);
        }
      )
  


  }

  //sirve para ejecutar el control del formulario en el html
  get f() {
    return this.reservaHtml.controls;
  }

  formularioReserva() {

    console.log('Funcione');
    this.submitted = true;
    if (this.reservaHtml.invalid) {
      return;
    }
    var date = new Date();

    this.nuevaReserva = new Reserve(
  
      this.reservaHtml.controls.nombres.value,
      this.reservaHtml.controls.empresa.value,
      this.reservaHtml.controls.parada.value
    );

    this.nuevaReserva.correu=this.sesion;


    console.log(this.nuevaReserva +" Fecha de ahora");

    console.log(this.nuevaReserva);

    this.reservaService.reservaTaxi(this.nuevaReserva).subscribe((datos:any)=>{
      console.log(datos);

      if (datos['resultado'] == 'OK') {
         let $mensaje = datos['mensaje'];
         Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Perfecte',
           text: $mensaje,
           showConfirmButton: false,
           timer: 1500,
         });
       }else{
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Ha sorgit un error inesperat!'
         })
       }
     });

  }

  
}


