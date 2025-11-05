import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvalue'
})
export class EvenValuePipe implements PipeTransform {

  transform(numbers: number[], ...args: unknown[]): number[] {
    return numbers.filter(elt => elt % 2 == 0);
  }

}
