import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length === 0){
      return value;
    } else {
      let resultArray = [];
        if(value.match('^.*' + args + '.*$')) {
          resultArray.push(value);
        }
      return resultArray;
    }
  }

}
