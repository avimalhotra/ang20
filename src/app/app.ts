import { Component } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom-pipe';
import { SortDataPipe } from './sort-data-pipe';


@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule, CustomPipe, SortDataPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces:true
})

export class App {
  title="Angular";
  version=20;

  valid=true;
  invalid=false;

  // terms=null;
  
  cars=["swift","baleno","polo","i20"];
  swift={name:"swift", power:82, torque:112};

  data=[
        {"name": "swift", "type": "hatchback", "price":810000},
        {"name": "dzire", "type": "hatchback", "price":880000},
        {"name": "ciaz", "type": "sedan", "price":1000000},
        {"name": "baleno", "type": "hatchback", "price":850000},
        {"name": "brezza", "type": "suv", "price":1400000},
        {"name": "fronx", "type": "hatchback", "price":1000000},
        {"name": "jimny", "type": "suv", "price":1300000}
    ];
  
    days=2;
    h1={ "font-size" : "50px", "color":"#00f" }

    date=new Date().getTime();
  
}
