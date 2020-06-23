import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  public nombre: string;

  constructor(private route: ActivatedRoute) {
    console.log('constructor home');
  }

  ngOnInit(): void {
    console.log('on init home');
    //this.nombre = this.route.snapshot.paramMap.get("nombre");
    this.route.params.subscribe(params => this.nombre = params.nombre);
  }


  ngDoCheck(): void {
    console.log('do check home')
  }
}
