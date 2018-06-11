import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], txtsearch?: any): any[] {

    if(arr != null && arr.length > 0){
      debugger;
      return arr.filter(f=> f.title.toLowerCase().includes((txtsearch.toLowerCase())) || f.date.toLowerCase().includes((txtsearch.toLowerCase())) );
    }
    return arr;
  }

}
