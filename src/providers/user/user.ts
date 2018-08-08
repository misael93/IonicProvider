// import { USERS_LIST } from './../../mockups/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../../models/user';

@Injectable()
export class UserProvider {

  constructor(private http: HttpClient) {

  }

  getUser(username): Observable<User> {
    var url = `https://api.github.com/users/${username}`;
    return this.http.get<User>(url);
  }

}
