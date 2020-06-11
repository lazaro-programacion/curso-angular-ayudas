import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  public mensaje = "Hola Pipe";

  public usuarios = [
    {
      nombre: "Juan",
      active: true
    },
    {
      nombre: "Inés",
      active: false
    },
    {
      nombre: "José",
      active: false
    },
    {
      nombre: "Carmen",
      active: true
    },
  ]

  public hoy: Date;

  constructor() { }

  ngOnInit(): void {
    this.hoy = new Date()
  }

}
