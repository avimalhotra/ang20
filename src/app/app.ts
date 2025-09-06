import { Component } from '@angular/core';
import { Course } from './course/course';


@Component({
  selector: 'app-root',
  // selector: '[data-app]',
  imports: [Course],
  templateUrl: './app.html',
  // template:'<h1>Hello {{title}}</h1>',
  styleUrl: './app.css'
  // styles:['h1{color:red}','p{color:blue}']
  // styleUrls: ['./app.css','./app-old.css']
})

export class App {
  title="Angular";
  version=20;

  // x=null;

  // ngOnInit(){
  //   console.log(this.x??"n/d");
  // }


}
