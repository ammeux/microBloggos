import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLogged = false;

  get isLoggedIn() {
   return this.isLogged;
  }
}

