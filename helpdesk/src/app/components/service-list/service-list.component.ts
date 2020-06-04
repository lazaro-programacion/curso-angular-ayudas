import { Component, OnInit } from '@angular/core';
import Service from 'src/app/model/service';
import { Order } from 'src/app/model/order/order';
import { OrderItem } from 'src/app/model/order/order-item';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {


  public services: Service[];
  public order: Order;

  onOrderChange(orderItem: OrderItem) {

    if (orderItem.quantity === 0) {
      this.order.items =
        this.order.items.filter(i => i.code !== orderItem.code)
    } else {
      this.order.items = [
        ...this.order.items.filter(i => i.code !== orderItem.code),
        orderItem
      ];
    }



    console.log(this.order.items);
    console.log(this.order.getTotalPrice());
  }

  constructor() { }

  ngOnInit(): void {
    this.order = new Order();
    this.services = [
      new Service('Instalacion Antivirus', 69.99, 'assets/img/antivirus.jpg', false),
      new Service('Instalación Windows', 89.99, 'assets/img/antivirus.jpg', true),
      new Service('Problemas ofimáticos', 59.99, 'assets/img/antivirus.jpg', false),
      new Service('Cualquier otro', 99.99, 'assets/img/antivirus.jpg', false)
    ];

  }

}
