import { Component } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces: true,
})
export class App {
  title = 'Angular';
  version = 20;

  // email=new FormControl('');
  // password=new FormControl('');

    loginform=new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]{8,12}')]),
    });


    submitForm(){
        // console.log( this.loginform.value) ;
        console.log( this.loginform.value.email) ;
        console.log( this.loginform.value.password) ;
    }

    constructor(){
      console.log("constructor");
    }



}
