import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../_services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  create(): void {
    this.userService.createUser(this.user)
      .subscribe(
        () => {
          console.log('Succeeded to subscribe addUser');
          this.router.navigate(['/login']);
        },
        error => {
          console.log('Failed to subscribe addUser');
          console.log(error);
        }
      );
  }
}
