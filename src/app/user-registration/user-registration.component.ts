import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegistration} from "../user-registration";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  title = "User Registration";
  reactiveForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      userFirstName: new FormControl("", [Validators.required, Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'\-])+$")]),
      userSurname: new FormControl("", [Validators.required, Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'\-])+$")]),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }


  get userName() {
    return this.reactiveForm.get("userName");
  }

  get userFirstName() {
    return this.reactiveForm.get("userFirstName");
  }

  get userSurname() {
    return this.reactiveForm.get("userSurname");
  }

  get userEmail() {
    return this.reactiveForm.get("userEmail");
  }

  get userPassword() {
    return this.reactiveForm.get("userPassword");
  }

  sendRegister(userRegister: UserRegistration) {
    window.alert("FuelRecord added");
  }
}
