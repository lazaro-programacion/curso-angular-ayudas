import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  // el valor es el dato, el segundo es calculadora:"..."
  transform(value: number, valor2: number): string {


    const operaciones = `
      Suma : ${value + valor2},
      resta: ${value - valor2}
      `;

    return operaciones;
  }

}
