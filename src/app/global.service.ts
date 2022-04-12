import { AppAuthService } from './app-auth.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  urlupdate = 'http://localhost:8000/api/users/';


  constructor(private _httpClient:HttpClient, private _authService:AppAuthService ) { }

  updateUser(profile: any): any {
    const data = {name:profile.name, email:profile.email , role:profile.role , created_at:profile.created_at , updated_at:profile.updated_at , password:profile.password};
    const token = this._authService.getSession();
    return this._httpClient.put(this.urlupdate + profile.id, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }


}
