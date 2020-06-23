import { Component, OnInit, DoCheck, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit,  DoCheck, OnDestroy {


  @Input()
  public miinput: string;

  public mensaje = 'mi mensaje';

  // Se ejecuta lo primero
  // Se puede usar, no pasa nada
  constructor() {
    console.log('constructor');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  // ngOnChanges(): Este hook se llama al inicio y cada vez que Angular
  //   detecta un cambio en los inputs del componente
  //   (cuando tienes algún property binding).
  //   Recibe como parámetro un objeto SimpleChanges, con los valores actuales
  //   y anteriores (si había) de los inputs.
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('onChanges', changes);
  // }

  // ngDoCheck(): Sirve para detectar y actuar sobre cambios que Angular
  // no va a detectar por si mismo. Se llama también durante cada ciclo
  // de detección de cambios, después de ngOnChanges().
  ngDoCheck(): void {
    console.log('docheck');
  }

  // ngOnInit(): Este hook te permite inicializar el componente una vez ha recibido
  // las propiedades de entrada.
  ngOnInit(): void {
    console.log('on init');
  }


  cambiaAlgo = () => {
    this.mensaje = 'mensaje cambiado';
  }
}
