import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { appConfig } from '../app.config';

@Injectable()
export class UserService {

  private addUserUrl = appConfig.apiUrl + '/register';
  private loginUserUrl = appConfig.apiUrl + '/login';

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(this.addUserUrl, user, {responseType: 'text'});
  }

  loginUser(user: User) {
    return this.http.post(this.loginUserUrl, user, {responseType: 'text'});
  }
}
