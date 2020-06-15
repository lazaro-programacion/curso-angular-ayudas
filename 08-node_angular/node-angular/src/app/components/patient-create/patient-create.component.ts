import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { Patient } from 'src/app/models/patient';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  public name = '';
  public surname = '';
  public pathologies = '';
  private id: string;

  constructor(private patientService: PatientService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.patientService.getPatient(this.id).subscribe(
        (e) => {
          this.name = e.name;
          this.surname = e.surname;
          this.pathologies = e.pathologies.join();
        }
      );
    }
  }

  save = () => {
    const newPatient: Patient = new Patient();
    newPatient.name = this.name;
    newPatient.surname = this.surname;
    newPatient.pathologies = this.pathologies.split(',');
    this.patientService.savePatient(newPatient, this.id).subscribe(
      () => {
        this.router.navigate(['/patients']);
      }
    );
  }


}
