import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackPageComponent } from './components/back-page/back-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full'},
  { path: 'home', component: MainComponent },
  { path: 'back/new', component: BackPageComponent },
  { path: 'back/:id', component: BackPageComponent },
  { path: 'back', component: BackPageComponent },
  { path: 'front', component: FrontPageComponent },
  { path: ':page', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
