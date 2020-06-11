import { Pipe, PipeTransform } from '@angular/core';


// users | active

@Pipe({
  name: 'active'
})
export class ActiveUsersPipe implements PipeTransform {

  transform(value: any[], active: boolean): any[] {
    return value.filter(i => active ? i.active : !i.active);
  }

}
