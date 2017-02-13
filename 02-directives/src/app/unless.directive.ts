import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input() set unless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.tRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private tRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
