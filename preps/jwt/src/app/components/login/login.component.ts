import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = '';
  public password = '';

  constructor(private userService: UserService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.user, this.password).subscribe(
      res => {
        console.log("logged")
        this.userService.token = res.token;
        this.router.navigate(["/message"]);
      }
    );
  }

}
