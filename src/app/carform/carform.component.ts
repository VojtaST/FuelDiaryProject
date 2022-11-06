import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car, FuelType} from "../car";

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {
  title = "Car Form";
  reactiveForm!: FormGroup;
  cars: Car[] = [];
  fuelTypes = FuelType;
  enumKeys: any[] = [];

  constructor() {
    this.enumKeys = Object.keys(this.fuelTypes).filter(f => !isNaN(Number(f)));
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      nameOfCar: new FormControl("", [Validators.required, Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'\-])+$")]),
      licencePlate: new FormControl("", [Validators.required, Validators.min(0)]),
      fuelType: new FormControl("")
    });
  }

  get nameOfCar() {
    return this.reactiveForm.get("nameOfCar");
  }

  get licencePlate() {
    return this.reactiveForm.get("licencePlate");
  }


  addCar(car: Car) {
    window.alert("Car added");
  }
}
