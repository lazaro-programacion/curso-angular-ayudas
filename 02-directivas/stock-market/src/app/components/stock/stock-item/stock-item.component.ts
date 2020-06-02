import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})


export class StockItemComponent implements OnInit {

  public stock: Stock;
  public isFavorite = false;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Telefónica', 'TEL', 8.99, 8.67);
  }

  favorite() {
    this.isFavorite = true;
  }

}
