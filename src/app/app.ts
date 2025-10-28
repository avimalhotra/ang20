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

import { Web } from './web';

@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule, Trainer, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces: true,
  providers:[ Web ]
})

export class App {
  title = 'Angular';
  version = 20;

  data:any;

  constructor( private web:Web){ }

  ngOnInit(){

    // fetch("https://api.github.com/users/avimalhotra").then(i=>i.json()).then(i=>console.log(i)).catch(i=>console.warn(i));
    // fetch("https://jsonplaceholder.typicode.com/users").then(i=>i.json()).then(i=>console.log(i)).catch(i=>console.warn(i));

    // console.log( this.web.getData() );       // observable

  }

  checkData(){
     this.web.getData().subscribe(res=>{
      this.data=res;
      console.log(this.data);
    });
  }

  
  


}