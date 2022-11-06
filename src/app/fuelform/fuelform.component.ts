import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../car";
import {FuelEntry} from "../fuel-entry";

@Component({
  selector: 'app-fuelform',
  templateUrl: './fuelform.component.html',
  styleUrls: ['./fuelform.component.css']
})
export class FuelformComponent implements OnInit {
  title = "Fuel Record";
  reactiveForm!: FormGroup;
  cars: Car[] = [];


  constructor() {

  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      nameOfFuelStation: new FormControl("", Validators.required),
      pricePerLiter: new FormControl("", [Validators.required, Validators.min(0)]),
      fuelAmount: new FormControl("", [Validators.required, Validators.min(0)]),
      dashboardKm: new FormControl("", [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]),
      carId: new FormControl("", [Validators.required]),
      totalPrice: new FormControl("", [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")])
    })
    ;
  }

  get nameOfFuelStation() {
    return this.reactiveForm.get("nameOfFuelStation");
  }

  get pricePerLiter() {
    return this.reactiveForm.get("pricePerLiter");
  }

  get fuelAmount() {
    return this.reactiveForm.get("fuelAmount");
  }

  get dashboardKm() {
    return this.reactiveForm.get("dashboardKm");
  }

  get carId() {
    return this.reactiveForm.get("carId");
  }

  get totalPrice() {
    return this.reactiveForm.get("totalPrice");
  }

  addFuelRecord(fuelEntry: FuelEntry) {
    window.alert("FuelRecord added");
  }
}
