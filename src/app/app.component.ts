import { Component } from '@angular/core';
import { EventsShareService } from 'src/app/services/events-share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dashboard';

  constructor(private eventsshareservice: EventsShareService){

  }

  /*toggle main section based on aside nav hide show*/
  mainWidthToggle(){
    return this.eventsshareservice.asideToggleButton;
  }
}
