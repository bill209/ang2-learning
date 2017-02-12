import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

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
  @Input('highlight') hightlightColor = 'green';
  // or
  // @Input() hightlight = 'green';


  private bgcolor: string;

  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = '#fdd';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'pink');
  }

  ngOnInit(){
   this.bgcolor = this.defaultColor;
  }

}
