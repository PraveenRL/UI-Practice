import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/service/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private login: SignService,
  ) { }

  ngOnInit() {
  }

  onSubmit(value){
    this.login.login(value)
  }

}
