import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {


  // public patients$: Observable<Patient[]>;
  public patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    // this.patients$ = this.patientService.getPatients();
    this.patientService.getPatients().subscribe(
      patients => this.patients = patients
    );
  }



}
