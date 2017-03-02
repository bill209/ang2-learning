import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDouble'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 2;
  }

}
