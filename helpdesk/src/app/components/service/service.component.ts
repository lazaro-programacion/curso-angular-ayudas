import { Component, OnInit, DoCheck } from '@angular/core';
import Service from 'src/app/model/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public service: Service;
  public quantity = 0;
  public cardClass: any;
  public contenido = "";

  constructor() { }

  cambiarCantidad(value: number) {
    this.quantity += value;
  }

  setContenido(c){
    console.log(c);
    this.contenido = c.toUpperCase();
  }

  createArrayTo(n: number): number[] {
    const result: number[] = [];
    for (let index = 0; index <= n; index++) {
      result.push(index);
    }
    return result;
  }

  setQuantity(e): void {
    console.log(e);
    this.quantity = parseInt(e.target.value);
  }

  ngOnInit(): void {
    this.service = new Service(
      'Instalacion Antivirus',
      69.99,
      'assets/img/antivirus.jpg',
      false);
  }


}
