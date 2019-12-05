import { Component, OnInit } from '@angular/core';
import { SignService } from 'src/app/service/sign.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
data: any
  constructor(
    private sign: SignService,
    private router: Router,
    private routing: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(value){
    this.sign.signup(value).subscribe(res => {
      this.data = res;
      console.log(this.data)
      this.router.navigate(['/login'])
    })
  }

}
