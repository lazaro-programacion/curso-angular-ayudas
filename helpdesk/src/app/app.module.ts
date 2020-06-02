import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceComponent } from './components/service/service.component';
import { ProviderComponent } from './components/provider/provider/provider.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
