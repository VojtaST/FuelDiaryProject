import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  title = "Login";
  reactiveForm!: FormGroup;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      userPassword: new FormControl("", [Validators.required])
    });
  }

  get userName() {
    return this.reactiveForm.get("userName");
  }

  get userPassword() {
    return this.reactiveForm.get("userPassword");
  }

  login(user: User) {
    window.alert("user logged in");

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
        var postId = data.id;
      },
      error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }
}
