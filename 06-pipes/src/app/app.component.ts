import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .pipes { padding: 20px; margin: 20px; color: rebeccapurple }
    li { list-style: none; }
  `]
})
export class AppComponent {
  title = 'app works!';
  infamy = new Date(1941, 11, 7);
  value = 3;
  values = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel'];

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('data is here'), 1000);
  })
}
