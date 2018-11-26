import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      if (username == "test" && password == "123")
      return resolve ("Success")
      else 
      return reject("Login credentials are incorrect")
    });
  }

}

