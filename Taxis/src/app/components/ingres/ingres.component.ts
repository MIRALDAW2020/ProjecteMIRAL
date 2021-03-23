import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingres',
  templateUrl: './ingres.component.html',
  styleUrls: ['./ingres.component.css'],
})
export class IngresComponent implements OnInit {
  ngOnInit(): void {}

  user: FormGroup;
  verpasswd: boolean = false;
  correu: string = "";
  pass: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: UsuarioService,
    private router: Router
  ) {
    this.user = this.formBuilder.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitted = false;
  get validacion() {
    return this.user.controls;
  }

  habilitarpasswd(): void {
    let campo: any = document.getElementById('passwd');

    if (this.verpasswd) {
      this.verpasswd = false;
      campo.type = 'password';
    } else {
      this.verpasswd = true;
      campo.type = 'text';
    }
  }

  enviarDatos() {
    console.log('hola');
    this.submitted = true;
    if (this.user.invalid) {
      return;
    }

    this.correu = this.user.controls.correo.value;
    this.pass = this.user.controls.password.value;

    console.log();


    this.loginService.login(this.correu, this.pass).subscribe((datos: any) => {
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
      } else if (datos['resultado'] == 'CKO') {
        let $mensaje = datos['mensaje'];
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Algo ha ido mal',
          text: $mensaje,
          showConfirmButton: false,
          timer: 1600,
        });
      } else if (datos['resultado'] == 'EKO') {
        let $mensaje = datos['mensaje'];
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Algo ha ido mal',
          text: $mensaje,
          showConfirmButton: false,
          timer: 1600,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Algo ha ido mal',
          text: 'Vuelve a intentarlo en un rato!',
        });
      }
    });
  }
  
}
