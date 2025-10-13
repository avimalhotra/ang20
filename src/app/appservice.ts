import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Appservice {

  getResponse(x:number,y:number){
    // return "Response from Appservice";
    return x*y;
  
  }

}