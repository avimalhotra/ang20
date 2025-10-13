import { Component, ViewEncapsulation } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trainer } from "./trainer/trainer";
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; 
// import { BehaviorSubject } from 'rxjs';
import { Appservice } from './appservice';
import { Error } from './error/error';
import { DevError } from './dev-error';

@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule, Trainer, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // encapsulation:ViewEncapsulation.None,
  preserveWhitespaces: true,
  // providers:[Appservice]
  // providers:[Error],
  providers:[{provide:Error, useExisting:DevError}],

})

export class App {
  title = 'Angular';
  version = 20;

  data:any;
  res:any;
  err:any;

  constructor( private service:Appservice, private error:Error){
    // fetch("https://jsonplaceholder.typicode.com/users").then(i=>i.json()).then(i=>console.log(i )); 
  }

  ngOnInit(){
      this.data=this.service.getResponse(2,3);
      console.log( this.data );

      this.checkError();
  }

  checkError(){
    this.err=this.error;
    console.log(this.err);
  }

  


}