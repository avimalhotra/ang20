import { Component } from '@angular/core';
<<<<<<< HEAD
import { Course } from './course/course';
import { FormsModule } from '@angular/forms';
=======
// import { Course } from './course/course';
>>>>>>> 4e2da33fecdaeb035d78233038f3203d4851067b
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [Course, CommonModule, FormsModule],
=======
  imports: [ CommonModule, FormsModule],
>>>>>>> 4e2da33fecdaeb035d78233038f3203d4851067b
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces:true
})

export class App {
  title="Angular";
  version=20;

<<<<<<< HEAD
  name="avinash";
  age=0;
  check=false;

  xFromTop=15;

  y=0;

  showY(count:number){
    this.y=count;
  }

  zz="n/a";
  showZ(){
    this.zz="hello";
  }

  t="lead";

=======
  name="";
  num=0;
>>>>>>> 4e2da33fecdaeb035d78233038f3203d4851067b

  
}
