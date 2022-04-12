import { UsersComponent } from './users/users.component';
import { ChildTicketComponent } from './tickets/child/child.component';
import { ErrorComponent } from './error/error.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profilepage',
    component: ProfileComponent,
    canActivate: [AppGuardGuard]


  },

  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [AppGuardGuard]


  },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AppGuardGuard]


  },




  {
    path: 'tickets/:id',
    component: ChildTicketComponent,
    canActivate: [AppGuardGuard]


  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
