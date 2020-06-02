import { Component, OnInit } from '@angular/core';
import Service from 'src/app/model/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public service: Service;
  public quantity = 0;

  constructor() { }

  cambiarCantidad(value: number) {
    this.quantity += value;
    // this.quantity = this.quantity + value;
  }

  ngOnInit(): void {
    this.service = new Service(
      'Instalacion Antivirus',
      69.99,
      'assets/img/antivirus.jpg',
      true);
  }

}
