import { Component, OnInit, ViewChild,  AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit , AfterViewInit{

  @ViewChild('texto')
  private elemento: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.elemento);
    this.elemento.nativeElement.innerText = this.elemento.nativeElement.innerText.toUpperCase();
  }

  ngOnInit(): void {
  }

}
