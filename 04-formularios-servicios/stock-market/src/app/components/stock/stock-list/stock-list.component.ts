import { Component, OnInit, DoCheck } from '@angular/core';
import { Stock } from 'src/app/models/stock/stock';
import {StockService} from 'src/app/service/stock.service'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit, DoCheck {

  public stocks: Stock[];
  public favorites: string[];


  constructor(private stockService: StockService) { }

  onSetFavorite(code: string) {
    this.favorites.push(code);
  }

  ngOnInit(): void {

    this.favorites = [];
  }

  ngDoCheck(): void {
    this.stocks = this.stockService.getStocks();
  }



}
