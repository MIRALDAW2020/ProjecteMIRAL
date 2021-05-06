import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  show: boolean;
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
    private router: Router
  )
  {
    this.show = false;
    this.perfilForm = this.formBuilder.group({
      fname: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
      lname: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
      email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(5), Validators.email]),
      phone: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(9)]),
      password: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  password() {
    this.show = !this.show;
  }

  saveUser(){

    

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
