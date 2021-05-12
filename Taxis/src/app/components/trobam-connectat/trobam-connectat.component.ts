import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Reserve } from 'src/app/models/reserva.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trobam-connectat',
  templateUrl: './trobam-connectat.component.html',
  styleUrls: ['./trobam-connectat.component.css']
})
export class TrobamConnectatComponent implements OnInit {

  formContact!: FormGroup;
  reserva!: Reserve
  UsuarioService: any;

  constructor() { }

  submitted = false;

  ngOnInit(): void {
  }

  enviarDatos(){
    console.log("Funcione");
    this.submitted = true;
    if(this.formContact.invalid){return;}

    this.reserva = new Reserve(
      this.formContact.controls.correu.value,
      this.formContact.controls.nom.value,
      this.formContact.controls.empresa.value,
      this.formContact.controls.parada.value
    );
    console.log(this.reserva);

    this.UsuarioService.reservaTaxi(this.reserva).subscribe((datos:any)=>{
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
