import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email = "";
  password = "";


  constructor(private _appAuthService: AppAuthService, private _router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      Swal.showLoading();
      console.log(this.loginForm.value);
      this._appAuthService.login(this.loginForm.value).subscribe(
        (token: any) => {
          console.log('',token);


          this._appAuthService.setSession(token)
          Swal.hideLoading();
          console.log(token);
          this._router.navigate(['/']);
        }
      )
    }
  }
}
