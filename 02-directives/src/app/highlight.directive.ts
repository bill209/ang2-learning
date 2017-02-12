import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mousein(){
    this.bgcolor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseout(){
    this.bgcolor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.bgcolor;
  }

  @Input() defaultColor = 'yellow';
  @Input('hilite') hightlightColor = 'green';

  private bgcolor = this.defaultColor;

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = '#fdd';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'pink');
  }

}
