import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <p>first app</p>
        <fa-lifecycle *ngIf="!del" [bindable]="boundValue">
            <p>{{test}}</p>
        </fa-lifecycle>
        <button (click)="test = 'changed value'">change value</button>
        <button (click)="boundValue = 2000">change binding</button>
        <button (click)="del = true">click to delete</button>

`
})
export class AppComponent {
  title = 'app works!!';
  test = 'starting value';
  boundValue = 1001;
  del = false;
}
