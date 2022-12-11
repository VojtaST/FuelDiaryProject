import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserRegistration} from "./user-registration";
import {User} from "./user";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private toastr: ToastrService) {
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
        this.toastr.success("Uživatel zaregistrován ");
      },
      error: error => {
        if (error.status == 401) {
          this.toastr.error("Neautorizovaný přístup ", error.status);
        } else {
          this.toastr.error("Chybka :) ", error.status);
        }
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
        this.toastr.success("Uživatel přihlášen ");
        if(data==null) this.toastr.error("Neplatné přihlašovací údaje.")
      },
      error: error => {
        if (error.status == 401) {
          this.toastr.error("Neautorizovaný přístup ", error.status);
        } else {
          this.toastr.error("Chybka :) ", error.status);
        }
      }
    })
  }
}
