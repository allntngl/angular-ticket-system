import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  username = '';
  password = '';

  isLogin = false;

  isLogged = new Subject<boolean>();

  url = 'http://localhost:8000/api/login';

  constructor(private _httpClient: HttpClient, private _router: Router) {}

  login(credential: any): any {
    this.isLogin = false;
    if (credential != '') {
      this.isLogin = true;
    }
    this.isLogged.next(this.isLogin);
    return this._httpClient.post(this.url, credential);
  }




  setSession(token: string) {
    localStorage.setItem('authToken', token);
  }

  getSession() {
    return localStorage.getItem('authToken');
  }
}
