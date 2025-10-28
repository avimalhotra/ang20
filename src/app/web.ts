import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Web {

  constructor(private http:HttpClient){ }

  getData(){
    // return this.http.get("https://jsonplaceholder.typicode.com/users");
    return this.http.get("https://api.postalpincode.in/pincode/110001" );
  }

}