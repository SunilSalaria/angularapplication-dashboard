import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  /*environment property declare*/
  api_url = environment.apiUrl;

  //get user detail service
  getUserDetail(){
      return this.http.get(this.api_url + "user");
  }

  //create user detail service
  createUserDetail(createUser:any){
    return this.http.post(this.api_url + "user", createUser);
  }

  //update user detail service
  viewUserRecord(id:any){
     return this.http.get(this.api_url + "user/" + id);
  }

  //update user detail service
  updateUserRecord(id:any, userObj:any){
    return this.http.put(this.api_url + "user/" + id , userObj);
 }

  //delete user record
  deleteUserRecord(id:any){
    return this.http.delete(this.api_url + "user/" + id);
 }
}
