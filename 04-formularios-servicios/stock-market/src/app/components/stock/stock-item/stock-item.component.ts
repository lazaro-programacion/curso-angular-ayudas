import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/models/stock/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})


export class StockItemComponent implements OnInit {

  @Input() public stock: Stock;
  @Input() public favorite: boolean;

  @Output() public setFavorite: EventEmitter<string>
    = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambioFuerte(stock: Stock) {
    return Math.abs(stock.price - stock.previousPrice) > 1;
  }

}
