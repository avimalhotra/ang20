import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(array: any[], field: string, order: boolean = true): any[] {
    if (!Array.isArray(array) || !field) return array;

    return array.sort((a, b) => {
      const valA = a[field];
      const valB = b[field];

      if (valA < valB) return order === true ? -1 : 1;
      if (valA > valB) return order === true ? -1 : 1;
      return 0;
    });
  }

}
