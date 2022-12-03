import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  title = "Login";
  reactiveForm!: FormGroup;

  constructor(private userService: UserService) {
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
    this.userService.loginUser(user);
  }
}
