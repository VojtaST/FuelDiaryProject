import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car, FuelType} from "../car";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarService} from "../car.service";

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {
  title = "Car Form";
  reactiveForm!: FormGroup;
  fuelTypes = FuelType;
  enumKeys: any[] = [];

  constructor(private http: HttpClient, private carService: CarService) {
    this.enumKeys = Object.keys(this.fuelTypes).filter(f => !isNaN(Number(f)));
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'\-])+$")]),
      licencePlate: new FormControl("", [Validators.required, Validators.min(0)]),
      fuelType: new FormControl("")
    });
  }

  get name() {
    return this.reactiveForm.get("name");
  }

  get licencePlate() {
    return this.reactiveForm.get("licencePlate");
  }

  addCar(car: Car) {
    this.carService.addCar(car);
  }
}
