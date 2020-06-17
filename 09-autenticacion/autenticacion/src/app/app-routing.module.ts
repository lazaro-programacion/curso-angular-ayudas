import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mensaje', component: MensajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
