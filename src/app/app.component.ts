import { Component } from '@angular/core';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBars = faBars;
  faTimes = faTimes;
  openMenu:any ;
  title = 'all-we-do';

  showMenu(){
    this.openMenu = 0;
  }

  hideMenu(){
    this.openMenu = -200;
  }
}
