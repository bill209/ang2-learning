import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <p>first app</p>
        <fa-lifecycle *ngIf="!del"></fa-lifecycle>
        <button (click)="del = true">click to delete</button>

`
})
export class AppComponent {
  title = 'app works!!';
  del = false;
}
