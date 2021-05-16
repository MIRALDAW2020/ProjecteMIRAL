import { ReservaService } from './../../services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,} from '@angular/forms';
import { Reserve } from 'src/app/models/reserva.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trobam-connectat',
  templateUrl: './trobam-connectat.component.html',
  styleUrls: ['./trobam-connectat.component.css'],
})
export class TrobamConnectatComponent implements OnInit {
  submited = false;
  nuevaReserva!: Reserve;
  reservaHtml!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reservaService: ReservaService
    )
  {}

  submitted = false;

  ngOnInit(): void {
    this.reservaHtml=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombres: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      parada: ['', [Validators.required]]
    })
  }

  //sirve para ejecutar el control del formulario en el html
  get f() {return this.reservaHtml.controls;}

  formularioReserva() {
    console.log('Funciona');

    this.submitted = true;
    if (this.reservaHtml.invalid) {return;}

    this.nuevaReserva = new Reserve(
      this.reservaHtml.controls.email.value,
      this.reservaHtml.controls.nombres.value,
      this.reservaHtml.controls.empresa.value,
      this.reservaHtml.controls.parada.value
    );
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
