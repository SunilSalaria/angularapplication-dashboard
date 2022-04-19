import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  //create form group object
  editRecord = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  });
  
  //get id form URL for get user data based on id
  getUrlId:any;   
  constructor(private crudservice:CrudService, private activatedroute:ActivatedRoute, private router: Router, private toasterservice:ToasterService ) { 
  }

  ngOnInit(): void {
 
    // get user data based on ID form URL
    this.activatedroute.params.subscribe(data =>{            
      this.getUrlId = data['id'];     
    });

    this.crudservice.viewUserRecord(this.getUrlId).subscribe(data => {     
      //patch data is use in reactive form function        
        this.editRecord.patchValue(data);            
    });

  }

  //update record
  //create new record we can use getrawvalue() instead of .value which is inbuild function of reactive form
  updateRecord(){    
    this.crudservice.updateUserRecord(this.getUrlId, this.editRecord.value).subscribe(data => {
      this.router.navigate(['/statistic']);    
      setTimeout(() =>{
        this.toasterservice.showSuccess("Record edit Successfully!", "Edit Record");
      }, 1000);    
    });  
  }

}
