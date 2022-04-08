import { Component, OnInit } from '@angular/core';
import { EventsShareService } from 'src/app/services/events-share.service';
import { AsideService } from 'src/app/services/aside.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
 
  /*get value of navlinks*/
  navlinkTitle:any;

  constructor(private eventsshareservice: EventsShareService, private asideservice:AsideService ) {
    
     /*get record from db for aside nav links*/
     this.asideservice.getAsideData().subscribe(data=>{
         this.navlinkTitle = data;
     });
   }

  asideNav:any;

  ngOnInit(): void {
   
  }

/*get value from header toggle button and check with aside*/
 asideNavbar(){
  return this.asideNav = this.eventsshareservice.asideToggleButton;
 }

}
