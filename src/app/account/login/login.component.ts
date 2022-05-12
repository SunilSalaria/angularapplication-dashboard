import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private crudservice:CrudService) { }

  ngOnInit(): void {
  }

  //create form group object
  loginForm = new FormGroup({   
    username: new FormControl(''),
    email: new FormControl('')
  });  

  vV:any;

  loginSubmit(){
    debugger;
    var emailValue = this.loginForm.get('email')?.value;
    var userName = this.loginForm.get('username')?.value;
   
    this.crudservice.getUserDetail().subscribe(res=>{
      
    

    });

    if(userName === "Bret" && emailValue === "Sincere@april.biz"){
       this.router.navigate(['/dashboard']);
      }

  }
}
