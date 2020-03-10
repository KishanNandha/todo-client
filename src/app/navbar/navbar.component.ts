import { HardcodedAuthService } from './../service/auth/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private hardcodedAuthService: HardcodedAuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  isUserLoggedIn() {
    return this.hardcodedAuthService.isUserLoggedIn();
  }

  logout() {
    this.hardcodedAuthService.doLogout();
    this.router.navigate(['']);
  }
  
}
