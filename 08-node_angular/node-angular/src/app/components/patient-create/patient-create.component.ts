import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  public name = '';
  public surname = '';
  public pathologies = '';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  save = () => {
    const newPatient: Patient = new Patient();
    newPatient.name = this.name;
    newPatient.surname = this.surname;
    newPatient.pathologies = this.pathologies.split(',');
    this.patientService.savePatient(newPatient).subscribe(
      () => {
        this.name = '';
        this.surname = '';
        this.pathologies = '';
      }
    );

  }


}
