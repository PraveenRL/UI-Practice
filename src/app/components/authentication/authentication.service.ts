import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public baseUrl = "https://5d3c1d02301f26001416ac6c.mockapi.io/";

  constructor(
    private http: HttpClient
  ) { }

  authenticate() {
    localStorage.setItem('user', 'RudhraTech');
  }

  checkAuthenticate() {
    return (localStorage.getItem('user') === 'RudhraTech');
  }

  public authenticationUser(userName: string, password: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'authorization-headers'
    });
    let options = { headers: headers };
    let data = {
      userName,
      password
    }
    return this.http.put(this.baseUrl + 'users', data, options);
  }

}
