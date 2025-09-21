import { Component } from '@angular/core';
import { Course } from './course/course';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces:true
})

export class App {
  title="Angular";
  version=20;

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


}
