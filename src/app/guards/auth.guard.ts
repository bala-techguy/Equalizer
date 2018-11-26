import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  value;

  constructor(private authService: AuthService, private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // this.authService.authenticated.subscribe(res => {
        
      //     this.value = res;
      //     console.log(res);
      //   }
        
      //   )
      // if (!this.authService.authState){
      //   this.router.navigate(['/login']);
      //   return false;
      // }
      // return true;
return this.authService.authenticated.pipe(
  take (1),
  map((isLoggedIn: boolean) => {
    console.log('Auth State: ' + isLoggedIn);
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  })
)
}
}
