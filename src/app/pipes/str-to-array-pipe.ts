import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strtoarray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(str: string, ...args: number[]): string[] {
    const start = args[0] ?? 0
    const end = args[1] ?? str.length
    return str.split('').slice(start, end)
  }

}
