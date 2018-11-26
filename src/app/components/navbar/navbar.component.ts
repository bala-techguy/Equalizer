import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //isLoggedIn: boolean;
  isLoggedIn$: Observable<boolean>;
  navigationSubscription;

  constructor(private router: Router, private authService: AuthService,) {
    this.navigationSubscription = this.router.events.subscribe ((e: any) => {
      if (e instanceof NavigationEnd) {
        this. ngOnInit();
      }
    })
   }

  ngOnInit() {

    this.isLoggedIn$ = this.authService.authenticated;

  }

  signOut() {
    this.authService.logOut();
  }

}
