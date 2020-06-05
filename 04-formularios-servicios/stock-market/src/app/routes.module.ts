import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { StockFormComponent } from './components/stock/stock-form/stock-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/lista' , pathMatch: 'full'},
  { path: 'create', component: StockFormComponent},
  { path: 'edit/:id', component: StockFormComponent},
  { path: 'lista', component: StockListComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
