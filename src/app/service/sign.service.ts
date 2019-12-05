import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  baseURL: string = 'http://localhost:4000/user/';
  data: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  signup(value){      
    let api = `${this.baseURL}signup`          //Normal Signup
    // let api = `${this.baseURL}signhash`     //Bcryptjs Signup
    return this.http.post(api, value)
      .pipe(map(res => this.data = res))
  }

  login(value){
    let api = `${this.baseURL}login`           //Normal Login
    // let api = `${this.baseURL}loginhash`    //Bcrypt Login
    return this.http.post(api, value).subscribe((res: any) => {
      console.log(res)
      if(!res){
        console.log('User not found');
      }
      else{
        this.router.navigate(['/parent']);
      }
  },
  err => {
    console.log("User not found " + err);
  }  
  )
}

}
