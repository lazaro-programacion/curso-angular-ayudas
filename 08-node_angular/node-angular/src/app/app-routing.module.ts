import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';


const routes: Routes = [
  {path: '', redirectTo: '/patients', pathMatch: 'full'},
  {path: 'patients', component: PatientListComponent},
  {path: 'patients/new', component: PatientCreateComponent},
  {path: 'patients/:id/edit', component: PatientCreateComponent},
  {path: 'patients/:id', component: PatientItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
