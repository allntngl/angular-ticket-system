import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = [];

  constructor(private _profileService:ProfileService) { }

  ngOnInit(): void {
    this._profileService.getAll().subscribe(
      (profile: any) => {
        this.profile = profile;
        console.log('Profi111le', profile);
      }
    )
  }

}
