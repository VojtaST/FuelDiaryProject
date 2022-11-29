import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car, FuelType} from "../car";
import {HttpClient, HttpHeaders} from "@angular/common/http";

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

  constructor(private http: HttpClient) {
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
    window.alert("Car added");

    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/cars/add-car', {
      "name": car.name,
      "fuelType": Number(car.fuelType),
      "licencePlate": car.licencePlate,
      "userId": localStorage.getItem('userId')
    }, options).subscribe({
      next: data => {
        var postId = data.id;
        window.location.assign("/fuel-form");
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })

  }
}
