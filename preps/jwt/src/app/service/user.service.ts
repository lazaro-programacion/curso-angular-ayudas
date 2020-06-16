import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public token: string;

  constructor(private httpClient: HttpClient) { }

  login(user: string, password: string) {
    return this.httpClient.post<any>('http://localhost:4000/login',
      {
        user,
        password
      });
  }
}
