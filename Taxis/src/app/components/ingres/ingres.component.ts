import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
// import { json } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-ingres',
  templateUrl: './ingres.component.html',
  styleUrls: ['./ingres.component.css'],
})
export class IngresComponent implements OnInit {

  formLogin!: FormGroup;
  verpasswd: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private loginService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitted = false;
  get f() {
    return this.formLogin.controls;
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
    this.submitted = true;
    if (this.formLogin.invalid) {return;}

    if (this.formLogin.valid) {

      const JSON = {
        correu: this.formLogin.controls.correo.value,
        pass: this.formLogin.controls.password.value
      }
      console.log(JSON);

      this.loginService.login(JSON).subscribe((datos: any) => {
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
          environment.varsesion= JSON.correu;
          setTimeout(() => {
            this.router.navigateByUrl('/inici');
          }, 1500);
          console.log(environment.varsesion);

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
        } else if (datos['resultado'] == 'KO') {
          let $mensaje = datos['mensaje'];
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Algo ha ido mal',
            text: $mensaje,
            showConfirmButton: false,
            timer: 1600,
          });
        }
      });
    }
  }
}
