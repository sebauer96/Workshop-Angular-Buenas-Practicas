import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDegrees'
})
export class ConvertDegreesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return ((value - 32)*5)/9;
  }

}
