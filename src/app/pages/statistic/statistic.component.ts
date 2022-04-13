import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {


  //get user data form service
  getUserData:any;

  constructor(private crudservice:CrudService) { 
    this.crudservice.getUserDetail().subscribe(data=>{
      this.getUserData = data;
    });
  }

  ngOnInit(): void {

  }

  //delete record method
  deleteRecord(){
       alert("delete button work successfully");
  }

}
