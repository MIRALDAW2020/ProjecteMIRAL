import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Missatge } from 'src/models/contacte.models';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent implements OnInit {

  formContact!: FormGroup;
  missatge!: Missatge;

  constructor(
    private formBuilder: FormBuilder
    ) {}

  submitted = false;

  ngOnInit(): void {

    // Condicions dels camps
    this.formContact = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(30),  Validators.pattern('[a-zA-Z]*[^[\s]{1}[a-zA-Z]*]?')]],
      email: ['', [Validators.required, Validators.email]],
      missatge: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(255),  Validators.pattern('[a-zA-Z]*[^[\s]{1}[a-zA-Z]*]?')]],
    })

  }

  get f() {return this.formContact.controls;}

  enviarDatos(){
    console.log("Funcione");
    this.submitted = true;
    if(this.formContact.invalid){return;}
    console.log("hola");

    this.missatge = new Missatge(
      this.formContact.controls.nombre.value,
      this.formContact.controls.email.value,
      this.formContact.controls.missatge.value
    );
    console.log(this.missatge);

  }

}
