import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'final';

  spinnerType: string;
  spinnerName: string;

  constructor(private spinner: NgxSpinnerService) {
    this.spinnerName = 'sp1';
    this.spinnerType = 'ball-clip-rotate-multiple';

    this.spinner.show(this.spinnerName);

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(this.spinnerName);
    }, 5000);
  }
}
