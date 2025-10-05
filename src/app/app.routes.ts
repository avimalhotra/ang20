import { Routes } from '@angular/router';
import { Course } from './course/course';
import { Trainer } from './trainer/trainer';
import { Home } from './home/home';
import { Error } from './error/error';

export const routes: Routes = [
     { path:"", component:Home, pathMatch:"full"},
     { path:"course", component:Course},
     { path:"trainer", component:Trainer},
     { path:"**", component:Error},
];
