import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{User} from '../app/user';
import 'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url='http://localhost:3200/doctor';
  baseurl='http://localhost:3000/clerk';
  url1="http://localhost:3000/critical";
  id: any;
  patientname: any;
  Disease: any;
  mobile: any;
  city: any;
  email: any;
  bgroup: any;
  gender: any;

  constructor(private http:HttpClient) { }
  getUser() {
    return this.http.get<User[]>(this.url);
  }
  getUserById(id:number){
    return this.http.get<User[]>(this.url + '/' + id )
  }

  //clerk access 
  createUser(user:User){
     return this.http.post(this.baseurl,user)
  }
  getUserById1(id:number){
   return this.http.get<User[]>(this.baseurl + '/' + id);
  }
  UpdateUser(user:User){
    return this.http.put(this.baseurl + '/' + user.id,user)
  }

  //book appoitmet
  getdoctor(){
    return this.http.get(this.url1);
  }
  getcard(){
    return this.http.get(' http://localhost:3000/cardiolos')
    .catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Error from server")
  }
}
