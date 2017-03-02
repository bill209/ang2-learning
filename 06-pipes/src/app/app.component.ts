import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .pipes { padding: 20px; margin: 20px; color: rebeccapurple }
  `]
})
export class AppComponent {
  title = 'app works!';
  infamy = new Date(1941, 11, 7);
  value = 3;
}
