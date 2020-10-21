import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  salarySlip: string;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.checkAuthenticate();
  }

  ngOnInit(): void {
  }

  getSalarySlip() {
    if (this.authenticationService.checkAuthenticate()) {
      this.salarySlip = "Salary Slip";
      return "Salary Slip";
    }
    this.salarySlip = "Not Authenticated";
    return "Not Authenticated";
  }

}
