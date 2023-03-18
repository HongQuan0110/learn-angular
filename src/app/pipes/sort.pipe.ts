import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortBy: any, sortValue: number): any[] {
    if(sortBy) {
      return products.sort((a, b) => {
        if(a[sortBy] > b[sortBy]) return sortValue;
        else if(a[sortBy] < b[sortBy]) return -sortValue;
        return 0;
      })
    }
    return products;
  }

}
