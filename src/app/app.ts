import { Component } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Login } from '../Login';

@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces: true,
})
export class App {
  title = 'Angular';
  version = 20;
  model=new Login("",0,"","",false);

  onSubmit(data:any){ console.log(data.value) }


}
