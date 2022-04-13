import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateRecordId:any;
  //create form group object
  editRecord = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  });


  constructor(private crudservice:CrudService, private router:ActivatedRoute) {   
      // this.updateRecordId = this.router.snapshot.params.id;
   }

  ngOnInit(): void {
  }

  //update record
  updateRecord(){
      
  }

}
