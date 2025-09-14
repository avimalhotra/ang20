import { Component } from '@angular/core';
// import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces:true
})

export class App {
  title="Angular";
  version=20;

  name="";
  num=0;

  
}
