import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:3000/addUser"
  url1 = "http://localhost:3000/userGetsPersonalUsage"
  data:any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  constructor(private http:HttpClient ){}

  authenticateUser(body){
    return this.http.post(this.url+"/authenticate",body,this.httpOptions)
  }
  addUser(body){
    console.log(body);  
    return this.http.post(this.url,body,this.httpOptions)
    
  }

  // transformer(body){
  //   return this .http.post(this.url1+"/getConsumption",body,this.httpOptions)
  // }

  getConsumption(){
    return this.http.get(this.url1+"/gp",this.httpOptions)
  }
}
