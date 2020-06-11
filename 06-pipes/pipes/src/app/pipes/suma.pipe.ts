import { Pipe, PipeTransform } from '@angular/core';


// <div>{{ value | nombrepipe:arg[0]:arg[1]:arg[2]}}</div>
// <div>{{ 5 | suma: 10}</div>


@Pipe({
  name: 'suma'
})
export class SumaPipe implements PipeTransform {

  transform(value: number, numero: number): number {
    return value + numero;
  }

}
