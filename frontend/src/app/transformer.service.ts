import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TransformerService {

  constructor( private http:HttpClient) { }

  url = "http://localhost:3000/addNewTransformer" 

  data:any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  addNewTransformer(body){
    return this.http.post(this.url,body,this.httpOptions)
  }

  showall(){
    return this.http.get(this.url+"/displayAllTransformers",this.httpOptions)
  }

  sendPsMode(body){
    console.log("service:"+JSON.stringify(body));
    
    return this.http.post("http://localhost:3000/psOn",body,this.httpOptions)
  }
  
  
  
}
