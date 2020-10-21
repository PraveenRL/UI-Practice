import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarePipe'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value !== null && !isNaN(value)) {
      return value * value;
    }
    return 'Not a number';
  }

}
