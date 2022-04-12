import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppAuthService } from '../app-auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getAll().subscribe((user: any) => {
      console.log(user);
      this.users = user;
    });
  }
}
