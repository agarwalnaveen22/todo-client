import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showStatus'
})
export class ShowStatusPipe implements PipeTransform {

  transform(value: Boolean): any {
    if(value){
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

}
