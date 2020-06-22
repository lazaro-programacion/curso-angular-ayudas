import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { TituloDirective } from './directives/titulo.directive';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    TituloDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
