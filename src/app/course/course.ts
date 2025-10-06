import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './course.html',
  styleUrl: './course.css',
  preserveWhitespaces: true,
})
export class Course {
  course = 'Courses';
}
