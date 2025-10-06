import { Routes } from '@angular/router';
import { Course } from './course/course';
import { Trainer } from './trainer/trainer';
import { Home } from './home/home';
import { Error } from './error/error';
import { Angular } from './angular/angular';
import { React } from './react/react';
import { Products } from './products/products';
import { Search } from './search/search';
import { authGuard } from './auth-guard';
import { logOutGuard } from './log-out-guard';

export const routes: Routes = [
     { path:"", component:Home, pathMatch:"full", title: 'Homepage'},
     { path:"course", component:Course, title: 'Course', /* canActivateChild:[authGuard], */ children:[
          { path:"angular", component:Angular },
          { path:"react", component:React },
     ], canDeactivate:[logOutGuard] },
     { path:"trainer", component:Trainer, title: 'Trainer', /* canActivate:[authGuard] */},
     { path:"search", component:Search, title: 'Search Courses'},
     { path:"products", title: 'Products', component:Products},
     // { path:"products", title: 'Products', canMatch:[authGuard], loadComponent:()=> import('./products/products').then(m=>m.Products) },
     { path:"products/:id", title: 'Product Details', component:Products},
     { path:"**", component:Error},
];
