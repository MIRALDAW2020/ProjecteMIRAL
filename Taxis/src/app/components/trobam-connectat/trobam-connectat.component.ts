import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Reserve } from 'src/app/models/reserva.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trobam-connectat',
  templateUrl: './trobam-connectat.component.html',
  styleUrls: ['./trobam-connectat.component.css'],
})
export class TrobamConnectatComponent implements OnInit {
<<<<<<< HEAD
  submited = false;
  nuevaReserva!: Reserve;
  reservaHtml!: FormGroup;
=======
  public reservaHtml!: FormGroup;
  public submited = false;

  public nuevaReserva!: Reserve;
  public UsuarioService: any;

  _correo = '';
>>>>>>> parent of 46fea8f (Intento Insertar reserva en db error en formulario)

  constructor(
    private formBuilder: FormBuilder,
    private reservaService: ReservaService
    )
  {}

  submitted = false;

  ngOnInit(): void {}

  //sirve para ejecutar el control del formulario en el html
  get f() {
    return this.formBuilder.controls;
  }

  formularioReserva() {
    console.log(this._correo);

    console.log('Funcione');
    this.submitted = true;
    if (this.formBuilder.invalid) {
      return;
    }

    this.nuevaReserva = new Reserve(
      this.formBuilder.controls.correoFormulario.value
    );
<<<<<<< HEAD
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


=======
    //  console.log(this.missatge);

    //  this.contacteService.enviarMissatge(this.missatge).subscribe((datos:any)=>{
    //    if (datos['resultado'] == 'OK') {
    //      let $mensaje = datos['mensaje'];
    //      Swal.fire({
    //        position: 'center',
    //        icon: 'success',
    //        title: 'Perfecte',
    //        text: $mensaje,
    //        showConfirmButton: false,
    //        timer: 1500,
    //      });
    //    }else{
    //      Swal.fire({
    //        icon: 'error',
    //        title: 'Oops...',
    //        text: 'Ha sorgit un error inesperat!'
    //      })
    //    }
    //  });
  }

  // enviarDatos(){
  //   console.log("Funcione");
  //   this.submitted = true;
  //   if(this.formContact.invalid){return;}

  //   this.reserva = new Reserve(
  //     this.formContact.controls.correu.value,
  //     this.formContact.controls.nom.value,
  //     this.formContact.controls.empresa.value,
  //     this.formContact.controls.parada.value
  //   );
  //   console.log(this.reserva);

  //   this.UsuarioService.reservaTaxi(this.reserva).subscribe((datos:any)=>{
  //     if (datos['resultado'] == 'OK') {
  //       let $mensaje = datos['mensaje'];
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'success',
  //         title: 'Perfecte',
  //         text: $mensaje,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }else{
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Ha sorgit un error inesperat!'
  //       })
  //     }
  //   });

  // }
>>>>>>> parent of 46fea8f (Intento Insertar reserva en db error en formulario)
}
