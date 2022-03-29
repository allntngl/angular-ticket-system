import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { AppAuthService } from '../app-auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  tickets: any = [];

  constructor(private _tickService: TicketsService) {}

  ngOnInit(): void {
    this._tickService.getAll().subscribe((ticket: any) => {
      console.log(ticket);
      this.tickets = ticket;
    });
  }
}
