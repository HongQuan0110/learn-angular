import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return value.substring(args[0] || 0, args[1] || 10) + '...';
  }

}
