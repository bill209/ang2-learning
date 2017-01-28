import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <p>testing change</p>
        <fa-other></fa-other>
        <fa-another></fa-another>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!';
}
