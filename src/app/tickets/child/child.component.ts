import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-ticket',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildTicketComponent implements OnInit {
  tickets: any = '';
  ticketId: string = '';
  ticket: any;

  constructor(
    private _ticketService: TicketsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.ticketId = params.id;
       console.log(params);
      console.log(this.ticketId);
      this._ticketService.getById(this.ticketId).subscribe((ticket: any) => {
        this.ticket = ticket;
        console.log('11',this.ticket);

      });
    });
  }
}
