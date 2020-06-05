import { Injectable } from '@angular/core';
import { Stock } from '../models/stock/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocks: Stock[];

  constructor() {
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
  }


  public getStocks(): Stock[] {
    console.log(this.stocks);
    return this.stocks;
  }

  public getStock(code: string): Stock {
    return this.stocks.filter(i => i.code === code)[0];
  }

  public createStock(stock: Stock) {
    console.log(stock);
    this.stocks = [
      ...this.stocks.filter(i => i.code !== stock.code),
      stock
    ];
  }

  public deleteStock(stock: Stock) {
    this.stocks = this.stocks.filter(i => i.code !== stock.code);
  }

}
