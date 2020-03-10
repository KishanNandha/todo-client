import { HardcodedAuthService } from './hardcoded-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private hardcodedAuthService: HardcodedAuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
