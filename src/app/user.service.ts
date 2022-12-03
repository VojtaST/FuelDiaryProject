import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserRegistration} from "./user-registration";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  sendRegister(userRegister: UserRegistration) {
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/users/register', {
      "username": userRegister.userName,
      "password": userRegister.userPassword,
      "firstName": userRegister.userFirstName,
      "surname": userRegister.userSurname,
      "email": userRegister.userEmail
    }, options).subscribe({
      next: data => {
        window.location.assign("/fuel-table");
        localStorage.setItem('userId', data.id);
        localStorage.setItem('token', `Bearer ${data.token}`);
      },
      error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }

  loginUser(user: User) {
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/users/login', {
      "username": user.userName,
      "password": user.userPassword
    }, options).subscribe({
      next: data => {
        localStorage.setItem('userId', data.id);
        localStorage.setItem('token', `Bearer ${data.token}`);
        window.location.assign("/fuel-table");
      },
      error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }
}
