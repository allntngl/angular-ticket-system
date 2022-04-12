import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = [];
  message: any = [];

  constructor(private _profileService:ProfileService, private _globalService:GlobalService) { }

  ngOnInit(): void {
    this._profileService.getAll().subscribe(
      (profile: any) => {
        this.profile = profile;
        console.log('Profi111le', profile);
      }
    )

  }

  updateProfile(): void {
    this._globalService.updateUser(this.profile).subscribe(
      (response: any) => {
        console.log(response);
        this.message = 'The user was updated!';
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
