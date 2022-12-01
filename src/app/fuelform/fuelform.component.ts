import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../car";
import {FuelEntry} from "../fuel-entry";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

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
    let savedToken = localStorage.getItem("token")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });

    var userId: string = localStorage.getItem('userId')!;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userId", userId);
    this.http.get<Car[]>('https://localhost:7235/api/cars/cars-user', {
      params: queryParams,
      headers: headerss
    }).subscribe({
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
      totalPrice: new FormControl("", [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]),
      dateOfRefuel: new FormControl("")
    });
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

  get dateOfRefuel()
  {
    return this.reactiveForm.get("dateOfRefuel");
  }

  addFuelRecord(fuelEntry: FuelEntry) {
    var userId: string = localStorage.getItem('userId')!;
    let savedToken = localStorage.getItem("token")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });
    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/fuelrecords/add-fuel-record', {
      "NameOfFuelStation": fuelEntry.nameOfFuelStation,
      "FuelAmount": fuelEntry.fuelAmount,
      "DashboardKms": fuelEntry.dashboardKm,
      "PricePerLiter": fuelEntry.pricePerLiter,
      "TotalPrice": fuelEntry.totalPrice,
      "CarId": fuelEntry.carId,
      "DateOfRefuel":fuelEntry.dateOfRefuel,
      "UserId":userId
    }, options).subscribe({
      next: data => {
        var postId = data.id;
        window.location.assign("/fuel-table");
      },
      error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })

  }
}
