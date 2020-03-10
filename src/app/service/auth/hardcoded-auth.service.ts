import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }
z
  authenticate(username, password) {
    if(username === 'kishan' && password === 'test123'){
        sessionStorage.setItem('authenticatedUser', username);
        return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  doLogout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
