import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    console.log(typeof args[0], typeof args[1], typeof args[2], args);
    
    if(args[0]) {
      value = value.filter(x => x.id.toString().includes(args[0].toLowerCase()));
    }
    if(args[1]) {
      value = value.filter(x => x.name.toLowerCase().includes(args[1].toLowerCase()));
    }
    if(args[2]) {
      value = value.filter(x => x.status.toString() == args[2]);
    }
    return value;
  }

}
