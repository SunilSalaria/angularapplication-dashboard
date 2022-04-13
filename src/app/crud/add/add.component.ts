import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router"


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private curdservice:CrudService, private router: Router) { }

  ngOnInit(): void {

  }

  //create form group object
  createRecord = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  //create new record 
  createNewRecord(){   
    this.curdservice.createUserDetail(this.createRecord.value).subscribe(data=>{
        data = this.createRecord.value;
    }); 

    //redirect to datatable page
    this.router.navigate(['/statistic']);
   
    this.curdservice.getUserDetail().subscribe(data =>{      
          data;
    });
  }

   //getter setter for validation
   get name()
   { 
     return this.createRecord.get('name');
  }
  get username()
   { 
     return this.createRecord.get('username');
  }
  get email()
  { 
    return this.createRecord.get('email');
  }


}
