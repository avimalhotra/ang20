import { Component } from '@angular/core';
import { Appservice } from '../appservice';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private service:Appservice){  }
  data:any;

  ngOnInit(){ 
    this.data=this.service.getResponse(4,5);
  }
}
