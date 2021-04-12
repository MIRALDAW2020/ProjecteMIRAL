import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent implements OnInit {

  user!: FormGroup;

  constructor(private formBuilder: FormBuilder) {


   }

  submitted = false;

  ngOnInit(): void {

    // Condicions dels camps
    // this.user = this.formBuilder.group({

    //   nom: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(20),  Validators.pattern('[a-zA-Z]*[^[\s]{1}[a-zA-Z]*]?')]],
    //   cognom: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(50),  Validators.pattern('[a-zA-Z]*[^[\s]{1}[a-zA-Z]*]?')]]
      // nickname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15), Validators.pattern('[\Sa-zA-Z_0-9\S]*')]],
      // correo: ['', [Validators.required, Validators.email, Validators.maxLength(50), Validators.minLength(7)]],
      // password: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(20), Validators.pattern('[\Sa-zA-Z_0-9\S]*')]],
      // password1: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(20), Validators.pattern('[\Sa-zA-Z_0-9\S]*')]],
      // centro: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20),  Validators.pattern('[a-zA-Z]*[^[\s]{1}[a-zA-Z]*]?')]]

    // })

  }

  enviarDatos(){

    this.submitted = true;

    // if(this.user.invalid){

    //   return;

    // }

  }

}
