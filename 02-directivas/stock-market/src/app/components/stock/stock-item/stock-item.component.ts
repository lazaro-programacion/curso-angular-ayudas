import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})


export class StockItemComponent implements OnInit {

 // public stock: Stock;
  public stocks: Stock[];
  public favorite: boolean[];
  public stockClasses: any;
  public stockStyles: any;
  public simpleArray: number[] = [4, 5, 6];


  constructor() { }

  ngOnInit(): void {

    this.stocks = [
      new Stock('Telefónica', 'TEL', 1.99, 8.67),
      new Stock('Naturgy', 'GAS', 6.99, 8.67),
      new Stock('Iberdrola', 'IBE', 9.99, 8.67)
    ];

    this.favorite = [false, false, false];
    // this.stock = new Stock('Telefónica', 'TEL', 1.99, 8.67);

    // this.stockClasses = {
    //   subiendo: this.stock.isSubiendo(),
    //   bajando: !this.stock.isSubiendo(),
    //   fuerte: this.cambioFuerte()
    // };

    // this.stockStyles = {
    //   color: this.stock.isSubiendo() ? 'green' : 'red',
    //   'font-weight': this.cambioFuerte() ? 'bold' : null
    // };

  }

  cambioFuerte(stock) {
    return Math.abs(stock.price - stock.previousPrice) > 1;
  }

  setFavorite(indice) {
    console.log(indice)
    this.favorite[indice] = true;
  }

}
