import { Component, OnInit } from '@angular/core';
import { EventsShareService } from 'src/app/services/events-share.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /*header dropdown properties*/
  userDropdownMenu:boolean=false;
  searchInputToggle:boolean=false;
  notificationDropdownMenu:boolean=false; 
  /*user dropdown property*/
  userDropdownTitle:any;
  /*user notification property*/
  userNotification:any;   

  constructor(private eventsshareservice: EventsShareService, private headerservice:HeaderService) {
    /*get data for user dropdown menu*/
    this.headerservice.getuserDropdown().subscribe(data=>{
        this.userDropdownTitle = data;           
    });

     /*get data for notification dropdown menu*/
     this.headerservice.getNotification().subscribe(data=>{
        this.userNotification = data;
     });

   }

  ngOnInit(): void {}

  /*header dropdown*/
  userDropdown(){
    this.userDropdownMenu = !this.userDropdownMenu;
  }

  searchToggle(){
      this.searchInputToggle = !this.searchInputToggle;
  }

  notificationDropdown(){
     this.notificationDropdownMenu = !this.notificationDropdownMenu;
  }  
  
  /*header toggle button for aside nav toggle*/
  asideToggleBtn(){
     this.eventsshareservice.asideToggleButton = !this.eventsshareservice.asideToggleButton;
  }  
}
