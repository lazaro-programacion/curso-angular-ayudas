import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientService } from './service/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent, PatientListComponent,
     PatientItemComponent, PatientCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
