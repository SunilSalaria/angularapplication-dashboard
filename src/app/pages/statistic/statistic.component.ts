import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2';
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
  // deleteRecord(id:any){     
  //      this.crudservice.deleteUserRecord(id).subscribe(data => {
  //          this.getUserData = this.getUserData.filter((dr: { id: any; }) => dr.id !== id);
  //          this.toasterservice.showError("Record Deleted Successfully !!", "Delete Record");
  //      });
  // }

 //delete record method using sweet alert box
  deleteRecord(id:any){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        //delete based on
        this.crudservice.deleteUserRecord(id).subscribe(data => {
          this.getUserData = this.getUserData.filter((dr: { id: any; }) => dr.id !== id);
          this.toasterservice.showError("Record Deleted Successfully !!", "Delete Record");
      });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}

