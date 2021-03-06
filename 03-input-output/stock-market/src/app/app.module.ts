import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './components/stock/stock-item/stock-item.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';



@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
