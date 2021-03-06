import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'message', component: MessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
