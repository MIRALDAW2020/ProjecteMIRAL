import { AdministradorService } from './../../../services/administrador.service';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  formLogin!: FormGroup;
  submitted!: boolean;

  resp!: any;

  // submitted: boolean;

  constructor(
    private readonly formBuilder: FormBuilder,
    private loginAdministrador:AdministradorService ,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

    enviarDatos() {
      this.submitted = true;
      if (this.formLogin.invalid) {return;}

      if (this.formLogin.valid) {

        const JSON = {
          correu: this.formLogin.controls.correo.value,
          contrasenya: this.formLogin.controls.password.value
        }
        console.log(JSON);

        this.loginAdministrador.loginAdministrador(JSON).subscribe((datos: any) => {
          console.log(datos);

          // (resp: Alumno[])=>{
          //   this.alumno = resp[0];
          //    // console.log(resp);
    
          // },
          // (error: any) => {
          //   console.log(error);
          // }

          

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
              // la ruta donde me lleva al funcionar el login 
              this.router.navigateByUrl('/admin');
            }, 1500);
            console.log(environment.varsesion);
  
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
