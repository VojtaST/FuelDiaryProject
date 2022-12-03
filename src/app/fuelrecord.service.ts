import {Injectable} from '@angular/core';
import {FuelEntry} from "./fuel-entry";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "./car";

@Injectable({
  providedIn: 'root'
})
export class FuelrecordService {
  items: FuelEntry[] = [];
  cars: Car[] = [];
  token: string = "";
  userId: string = ""

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token")!;
    this.userId = localStorage.getItem("userId")!;
  }

  public getFuelEntries(): Observable<FuelEntry[]> {

    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token
    });
    return this.http.get<FuelEntry[]>(`https://localhost:7235/api/fuelrecords/fuel-records-user?userId=${this.userId}`, {headers: headerss});
  }

  getFuelEntriesCarId(id: string): Observable<FuelEntry[]> {
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token
    });
    return this.http.get<FuelEntry[]>(`https://localhost:7235/api/fuelrecords/fuel-records-car?carId=${id}`, {headers: headerss});
  }

  addFuelRecord(fuelEntry: FuelEntry) {
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.token
    });
    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/fuelrecords/add-fuel-record', {
      "NameOfFuelStation": fuelEntry.nameOfFuelStation,
      "FuelAmount": fuelEntry.fuelAmount,
      "DashboardKms": fuelEntry.dashboardKm,
      "PricePerLiter": fuelEntry.pricePerLiter,
      "TotalPrice": fuelEntry.totalPrice,
      "CarId": fuelEntry.carId,
      "DateOfRefuel": fuelEntry.dateOfRefuel,
      "UserId": this.userId
    }, options).subscribe({
      next: data => {
        window.location.assign("/fuel-table");
      },
      error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }
}
