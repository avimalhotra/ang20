import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
  preserveWhitespaces:true
})
export class Course {
  course="TypeScript";

  // @Input() x=0; 
  x=input(0);               // signal based

  @Output() changeY=new EventEmitter<number>();
  y=10;

  changedY(){
    this.y=this.y+1;
    this.changeY.emit(this.y);
  }


  z=output<string>();
  changeZ(){
    this.z.emit("hello");
  }


 



}