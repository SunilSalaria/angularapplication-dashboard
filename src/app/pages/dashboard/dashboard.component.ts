import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private toasterservice : ToasterService) { }

  ngOnInit(): void {
  }
   
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

}
