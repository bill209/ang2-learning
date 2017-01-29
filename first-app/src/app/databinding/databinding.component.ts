import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  onTest() {
    return true;
  }
  stringInterpolation = 'string interpolation';
  numberInterpolation = 2;
}
