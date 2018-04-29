import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../_services/user.service';
import { Router} from '@angular/router';
import { AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  login(): void {
    this.userService.loginUser(this.user)
      .subscribe(
        () => {
          console.log('Succeeded to subscribe userLogin');
          this.authService.isLogged = true;
          localStorage.setItem('username', this.user.username);
          this.router.navigate(['/message']);
        },
        error => {
          console.log('Failed to subscribe userLogin');
          console.log(error);
        }
      );
  }
}
