import { Component, ChangeDetectorRef, ViewChild, ViewChildren, ContentChild } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trainer } from "./trainer/trainer";
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; 
// import { BehaviorSubject } from 'rxjs';
import { Appservice } from './appservice';
import { Error } from './error/error';
import { DevError } from './dev-error';
import { Card } from './card/card';

import { Web } from './web';

@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule, Trainer, RouterOutlet, RouterLink, RouterLinkActive, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces: true,
  providers:[ Web ]
})

export class App {
  title = 'Angular';
  version = 20;

  data:any;

  constructor( private web:Web, private cdr: ChangeDetectorRef){ }

  // @ViewChild(Card) card!: Card;
  // @ViewChildren(Card) card!: Card[];
  @ContentChild(Card) messageViewChild: Card | undefined ;

  

  ngAfterViewInit(){
    // console.log( this.card );
    // this.card.forEach(c => console.log(c.message()));
    
  }

  ngAfterContentInit(){
      console.log( this.messageViewChild );
  }

  ngOnInit(){

    // fetch("https://api.github.com/users/avimalhotra").then(i=>i.json()).then(i=>console.log(i)).catch(i=>console.warn(i));
    // fetch("https://jsonplaceholder.typicode.com/users").then(i=>i.json()).then(i=>console.log(i)).catch(i=>console.warn(i));

    // console.log( this.web.getData() );       // observable

    /* post data */
    //  this.web.postData().subscribe(res=>{ console.log(res);});

  }

  checkData(){
     this.web.getData().subscribe(res=>{
      this.data=res;
      console.log(this.data);
      // When using zoneless change detection (provideZonelessChangeDetection)
      // async callbacks (like fetch/http) don't trigger Angular's change detection.
      // Force a change detection run so the template updates immediately.
      try { this.cdr.detectChanges(); } catch (e) { /* noop if detectChanges unavailable */ }
    });
  }




  
  


}