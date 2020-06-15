import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, DoCheck {


  // public patients$: Observable<Patient[]>;
  public patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngDoCheck(): void {
    console.log("do check");

  }

  ngOnInit(): void {
    // this.patients$ = this.patientService.getPatients();
    console.log("On init");
    this.fetchPatients();
  }

  fetchPatients() {
    this.patientService.getPatients().subscribe(
      patients => this.patients = patients
    );
  }


  delete(e: Event, id: string) {
    e.preventDefault();
    this.patientService.deletePatient(id).subscribe(
      () => this.fetchPatients()
    );
  }


}
