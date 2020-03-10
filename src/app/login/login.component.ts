import { HardcodedAuthService } from './../service/auth/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'kishan';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthService: HardcodedAuthService
  ) { }

  ngOnInit() {
    if(this.hardcodedAuthService.isUserLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  handleLogin() {
      if(this.hardcodedAuthService.authenticate(this.username, this.password)) {
          this.router.navigate(['dashboard']);
          this.invalidLogin = false;
      }
      else {
        this.invalidLogin = true;
      }
  }

}
