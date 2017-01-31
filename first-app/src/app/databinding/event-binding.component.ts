import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked_eb()">click me now</button>
  `,
  styles: []
})
export class EventBindingComponent  {
  @Output() clickety = new EventEmitter<string>();

  onClicked_eb(){
    alert('hi');
    this.clickety.emit('it works')
  }

}
