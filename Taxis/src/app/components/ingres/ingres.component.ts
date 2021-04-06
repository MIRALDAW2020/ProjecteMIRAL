import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingres',
  templateUrl: './ingres.component.html',
  styleUrls: ['./ingres.component.css']
})
export class IngresComponent implements OnInit {

  ngOnInit(): void {
  }

  user: FormGroup;
  verpasswd: boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.user = this.formBuilder.group({

      correo: ['', Validators.required]

    });

  }

  submitted = false;

  get validacion(){

    return this.user.controls;

  }

  habilitarpasswd(): void {

    let campo:any = document.getElementById('passwd');

    if (this.verpasswd) {

      this.verpasswd = false;
      campo.type = "password";

    } else {

      this.verpasswd = true;
      campo.type = "text";

    }

  }

  enviarDatos(): void {

    this.submitted = true;

    if(this.user.invalid){

      return;

    }

  }

}
