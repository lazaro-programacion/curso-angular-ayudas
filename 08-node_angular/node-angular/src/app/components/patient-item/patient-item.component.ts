import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {


  public id: string;
  public patient$: Observable<Patient>;

  constructor(private route: ActivatedRoute,
              private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.patient$ = this.patientService.getPatient(this.id);
  }

}
