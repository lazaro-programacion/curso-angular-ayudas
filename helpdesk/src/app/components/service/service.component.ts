import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import Service from 'src/app/model/service';
import { OrderItem } from 'src/app/model/order/order-item';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})


export class ServiceComponent implements OnInit {

  @Input() public service: Service;
  @Output() public quantityChange: EventEmitter<OrderItem>
    = new EventEmitter<OrderItem>();
  public quantity = 0;
  public cardClass: any;
  public contenido = "";

  constructor() { }

  cambiarCantidad(value: number) {
    this.quantity += value;
    this.quantityChange.emit(
      new OrderItem(this.service.name,
        this.quantity,
        this.service.price)
    );
  }

  setContenido(c) {
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
    this.quantity = parseInt(e.target.value);
    this.quantityChange.emit(
      new OrderItem(this.service.name,
        this.quantity,
        this.service.price)
    );
  }

  ngOnInit(): void {
  }


}
