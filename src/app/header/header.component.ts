import { LoaderService } from './../loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  isLogin = false;
  islog: any;

  spinnerType: string;
  spinnerName: string;

  constructor(
    private _appAuthService: AppAuthService,
    private _router: Router,
    private spinner: NgxSpinnerService

  )


  {

    this.spinnerName = 'sp1';
    this.spinnerType = 'ball-clip-rotate-multiple';

    this.spinner.show(this.spinnerName);


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);


    if (localStorage.getItem('islog') == 'true') {
      localStorage.setItem('islog', 'true');
      this.isLogin = true;
    } else {
      localStorage.setItem('islog', 'false');
    }
  }

  logoutUser() {

    this._router.navigate(['/login']);
    this.isLogin = false;

    console.log(this.isLogin);
    localStorage.setItem('islog', (this.islog = 'false'));
    localStorage.removeItem('authToken');
  }



  ngOnInit(): void {
    this._appAuthService.isLogged.subscribe((auth) => {
      console.log(auth);
      this.isLogged = auth;
      this.isLogin = true;
      localStorage.setItem('islog', (this.islog = 'true'));
    });
  }
}
