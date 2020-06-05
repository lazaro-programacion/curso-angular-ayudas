import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StockItemComponent } from './components/stock/stock-item/stock-item.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { StockService } from './service/stock.service';
import { StockFormComponent } from './components/stock/stock-form/stock-form.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockListComponent,
    StockFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
