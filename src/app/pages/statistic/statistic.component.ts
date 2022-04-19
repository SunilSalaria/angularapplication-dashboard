import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {


  //get user data form service
  getUserData:any;

  constructor(private crudservice:CrudService, private toasterservice : ToasterService) { 
    this.crudservice.getUserDetail().subscribe(data=>{
      this.getUserData = data;
    });
  }

  ngOnInit(): void {

  }

  //delete record method
  deleteRecord(id:any){     
       this.crudservice.deleteUserRecord(id).subscribe(data => {
           this.getUserData = this.getUserData.filter((dr: { id: any; }) => dr.id !== id);
           this.toasterservice.showError("Record Delete Successfully !!", "Delete Record");
       });
  }

}
