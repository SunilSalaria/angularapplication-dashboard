import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private toasterservice : ToasterService) { }

  ngOnInit(): void {
  }
  
  //================= toaster =========================
  showToasterSuccess(){
      this.toasterservice.showSuccess("Data shown successfully !!", "tutsmake.com")
  }
   
  showToasterError(){
      this.toasterservice.showError("Something is wrong", "tutsmake.com")
  }
   
  showToasterInfo(){
      this.toasterservice.showInfo("This is info", "tutsmake.com")
  }
   
  showToasterWarning(){
      this.toasterservice.showWarning("This is warning", "tutsmake.com")
  }

// =========swal alert sweet alert2==============

  simpleAlert(){
    Swal.fire('Hello world!');
  }
  
  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  
  confirmBox(){
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
