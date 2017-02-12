import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mousein(){
    this.bgcolor = 'green';
  }

  @HostListener('mouseleave') mouseout(){
    this.bgcolor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.bgcolor;
  }

  private bgcolor = 'white';

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = '#fdd';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'pink');
  }

}
