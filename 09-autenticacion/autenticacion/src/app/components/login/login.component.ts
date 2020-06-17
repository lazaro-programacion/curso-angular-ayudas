import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = '';
  public password = '';

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.user,
              this.password).subscribe(
                res => {
                  this.loginService.token = res.token;
                  console.log("token", this.loginService.token);
                  this.router.navigate(["/mensaje"]);
                }
              )
  }

}
