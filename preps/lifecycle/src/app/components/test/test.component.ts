import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit , DoCheck, OnDestroy{


  public mensaje = 'hola mundo';

  constructor() { }
  ngOnDestroy(): void {
    console.log("destroy");
  }
  ngDoCheck(): void {
    console.log('do check');
  }

  ngOnInit(): void {
    console.log('oninit');
  }

  cambia() {
    this.mensaje="CAmbiado";
  }

}
