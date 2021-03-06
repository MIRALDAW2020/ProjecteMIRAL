import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario!: Usuario;

  usuariNom: string = "";
  sesion: string = environment.varsesion;



  show: boolean;
  usr: boolean = true;
  perfilForm: FormGroup;



  validation_messages = {
    fname: [
      { type: 'required', message: 'El campo nombre es obligatorio' },
      { type: 'minlength', message: 'El campo nombre debe contener como mínimo 3 carácteres' },
    ],
    lname: [
      { type: 'required', message: 'El campo apellidos es obligatorio' },
      { type: 'minlength', message: 'El campo apellidos debe contener como mínimo 3 carácteres' },
    ],
    email: [
      { type: 'required', message: 'El campo e-mail es obligatorio' },
      { type: 'minlength', message: 'El campo e-mail debe contener como mínimo 5 carácteres' },
      { type: 'email', message: 'El campo e-mail no tiene buen formato' },
    ],
    phone: [
      { type: 'required', message: 'El campo telefono es obligatorio' },
      { type: 'minlength', message: 'El campo contraseña debe contener como mínimo 9 números' },
    ],
    password: [
      { type: 'required', message: 'El campo contraseña es obligatorio' },
      { type: 'minlength', message: 'El campo contraseña debe contener como mínimo 6 carácteres' },
    ],
  };


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private router: Router,
    private usuarioService: UsuarioService,

  )
  {
    this.show = false;
    this.perfilForm = this.formBuilder.group({
      fname: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
      lname: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
      email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5), Validators.email]),
      phone: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(9)])
    });
  }

  ngOnInit(): void {

    this.UsuarioService.pedirDatosUsuario(this.sesion).subscribe(
      (resp: any)=>{
        this.usuariNom = resp[0].nom
        this.usuario=resp[0];

        console.log(this.usuario);

      },
      (error: any) => {
        console.log(error);
      }
    );


  }

  password() {
    this.show = !this.show;
  }

  saveUser(){

    this.usuario = new Usuario(this.perfilForm.controls.fname.value, this.perfilForm.controls.lname.value, this.perfilForm.controls.phone.value, this.perfilForm.controls.email.value);
    console.log(this.usuario);

    this.usuarioService.updateUser(this.usuario).subscribe((datos:any) =>{
      console.log(datos);

      if (datos['resultado'] == 'OK') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bien!',
          text: datos['mensaje'],
          showConfirmButton: false,
          timer: 1500,
        }).then(function(){
          window.location.reload();
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ups... algo ha ido mal',
          text: "Error al guardar los datos!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    this.perfilForm.get('fname')?.disable();
    this.perfilForm.get('lname')?.disable();
    this.perfilForm.get('email')?.disable();
    this.perfilForm.get('password')?.disable();
    this.perfilForm.get('phone')?.disable();
  }

  editarInfo(){
    this.perfilForm.get('fname')?.enable();
    this.perfilForm.get('lname')?.enable();
    this.perfilForm.get('email')?.enable();
    this.perfilForm.get('password')?.enable();
    this.perfilForm.get('phone')?.enable();
  }


}
