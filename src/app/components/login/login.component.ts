import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.username = 'test';
    this.password = '123';
  }

  onSubmit() {
    console.log(this.username);
    console.log(this.password);
    this.authService.login(this.username, this.password)
      .then((res) => {
        this.flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
        // Redirect to dashboard
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 4000 });
        // navigate back to login page
        this.router.navigate(['/login']);
      });
  }

}
