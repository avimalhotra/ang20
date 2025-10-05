import { Component, ViewEncapsulation } from '@angular/core';
import { Course } from './course/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trainer } from "./trainer/trainer";
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; 


@Component({
  selector: 'app-root',
  imports: [Course, CommonModule, FormsModule, Trainer, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // encapsulation:ViewEncapsulation.None,
  preserveWhitespaces: true,
})
export class App {
  title = 'Angular';
  version = 20;

}