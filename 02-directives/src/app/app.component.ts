import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private swatch = true;

  private colors = ['red', 'orange', 'yellow', 'green', 'blue' ];

  onSwitch(){
   this.swatch = !this.swatch;
  }
}
