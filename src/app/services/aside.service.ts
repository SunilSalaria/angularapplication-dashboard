import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsideService {

  constructor(private http:HttpClient) { }

  /*environment property declare*/
  api_url = environment.apiUrl;

   /*get user dropdown function in header section*/
   getAsideData(){
      return this.http.get(this.api_url + "asideNav");
   }

}
