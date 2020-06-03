import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { StockItemComponent } from './components/stock/stock-item/stock-item.component';
import { TestRouterComponent } from './components/test-router/test-router.component';


const routes: Routes = [
  { path: 'list', component: StockListComponent },
  { path: 'stock/:id', component: TestRouterComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule { }
