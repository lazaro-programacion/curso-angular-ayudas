import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private httpClient: HttpClient) {
  }

  getPatients = () => {
    return this.httpClient.
      get<Patient[]>('http://localhost:4000/patients/');
  }


}
