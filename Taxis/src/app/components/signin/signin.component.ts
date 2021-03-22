import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  RxwebValidators } from '@rxweb/reactive-form-validators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario!: Usuario;
  formRegistro!: FormGroup;
  submitted = false;
  minLengthTLF: number = 9;
  maxLengthTLF: number = 9;

  constructor(private usuarioService: UsuarioService, private readonly fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      telefon: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      rpass: new FormControl('', [
        Validators.required,
        RxwebValidators.compare({ fieldName: 'pass' }),
      ])
    })
  }

  get f(){
    return this.formRegistro.controls;
  }

  registrarUsuari(){
    console.log("Hola");
    this.submitted = true;
    if(this.formRegistro.invalid){
      return;
    }

    this.usuario = new Usuario(
      this.formRegistro.controls.name.value,
      this.formRegistro.controls.lname.value,
      this.formRegistro.controls.telefon.value,
      this.formRegistro.controls.email.value,
      this.formRegistro.controls.pass.value
    );
    console.log(this.usuario);

    this.usuarioService.registrarUsuari(this.usuario).subscribe((datos:any)=>{

      //Insert OK
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

        setTimeout(() => {
          this.router.navigateByUrl('/ingres');
        }, 1500);

        // Error al insert
      }else if (datos['resultado'] == 'KO') {
        let $mensaje = datos['mensaje'];
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ups...',
            text: $mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
      }

    })

  }

}
