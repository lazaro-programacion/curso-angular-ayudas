import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks: Stock[];
  public favorites: string[];

  constructor() { }

  onSetFavorite(code: string) {
    this.favorites.push(code);
  }

  ngOnInit(): void {

    this.stocks = [
      new Stock('Telefónica', 'TEL', 1.99, 8.67),
      new Stock('Naturgy', 'GAS', 7.99, 8.67),
      new Stock('BBVA', 'BBVA', 1.79, 1.67),
      new Stock('Telefónica', 'YEL', 1.99, 8.67),
      new Stock('Naturgy', 'HEL', 7.99, 8.67),
      new Stock('BBVA', 'BBVA1', 1.79, 1.67),
      new Stock('Telefónica', 'REL', 1.99, 8.67),
      new Stock('Naturgy', 'GAS2', 7.99, 8.67),
      new Stock('BBVA', 'BBVA2', 1.79, 1.67),
      new Stock('Startup', 'STA2', 1.89, 2.67)
    ];
    this.favorites = [];
  }

}
