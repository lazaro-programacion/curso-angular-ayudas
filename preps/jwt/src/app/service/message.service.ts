import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessage = () => {
    return this.http.get("http://localhost:4000/seguro-middleware");
  }
}
