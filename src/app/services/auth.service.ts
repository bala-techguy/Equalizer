import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authState: boolean = null;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      if (username == "test" && password == "123"){
        //this.authState = true;
        this.loggedIn.next(true);
        return resolve ("Success")
      }
      
      else {
        this.loggedIn.next(false);
        return reject("Login credentials are incorrect")
      }
      
    });
  }

  logOut() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  get authenticated() {
    console.log("Authenticated: " + this.loggedIn.asObservable());
    //return this.authState !== null;
    return this.loggedIn.asObservable();
  }

  get authState() {
   return this.authenticated.subscribe(res => {
    console.log("Auth State: " + res);  
      return res;
    }    
    )
  }

}

