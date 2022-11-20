import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../car";
import {FuelEntry} from "../fuel-entry";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-fuelform',
  templateUrl: './fuelform.component.html',
  styleUrls: ['./fuelform.component.css']
})
export class FuelformComponent implements OnInit {
  title = "Fuel Record";
  reactiveForm!: FormGroup;
  cars: Car[] = [];


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    this.http.get<Car[]>('https://localhost:7235/api/cars/cars-user?userId=3b23416f-142d-4631-9668-21db6a646e94').subscribe({
      next: data => {
        this.cars = data as Car[];
      },
      error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });


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
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/fuelrecords/add-fuel-record', {
      "NameOfFuelStation": fuelEntry.nameOfFuelStation,
      "FuelAmount": fuelEntry.amountLiters,
      "DashboardKms": fuelEntry.dashboardKm,
      "PricePerLiter": fuelEntry.pricePerLiter,
      "TotalPrice": fuelEntry.totalPrice,
      "CarId": fuelEntry.carId
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
