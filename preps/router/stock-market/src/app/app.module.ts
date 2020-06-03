import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockItemComponent } from './components/stock/stock-item/stock-item.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { AppRoutesModule } from './app-routes.module';
import { TestRouterComponent } from './components/test-router/test-router.component';


@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockListComponent,
    TestRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
