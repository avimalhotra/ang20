import { Component } from '@angular/core';
import { Appservice } from '../appservice';

@Component({
  selector: 'app-home',
  imports: [],
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
