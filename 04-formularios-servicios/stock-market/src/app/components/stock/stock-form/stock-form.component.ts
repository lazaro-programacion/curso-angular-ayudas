import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Stock } from 'src/app/models/stock/stock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  public name = '';
  public code = '';
  public price = 0;
  public previousPrice = 0;

  public editMode = false;


  constructor(private stockService: StockService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('id');
    if (this.code) {
      this.editMode = true;
    }
    const obj = this.stockService.getStock(this.code);
    this.name = obj.name;
    this.price = obj.price;
    this.previousPrice = obj.previousPrice;
  }

  crear() {
    this.stockService.createStock(
      new Stock(this.name, this.code, this.price, this.previousPrice));
    this.router.navigate(['/lista']);
  }

}
