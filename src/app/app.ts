import { Component } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Course, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces:true
})

export class App {
  title="Angular";
  version=20;
  alt="star";
  src="favicon.ico";
  dis=false;
  p="lead";
  count=0;

  data=["swift","polo","audi","bmw"];
  swift={name:"swift",power:82};

  // sayHi(){ return "Hello Angular" };
  // sayHi(){console.log("Hello Angular") };

  counter(){this.count=this.count+1}

 
  reverseString=(x:string)=> x.split("").reverse().join("");

}
