import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import locale from '@angular/common/locales/es'
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { registerLocaleData } from '@angular/common';
import { SumaPipe } from './pipes/suma.pipe';
import { ActiveUsersPipe } from './pipes/active-users.pipe';

registerLocaleData(locale)

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SumaPipe,
    ActiveUsersPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
