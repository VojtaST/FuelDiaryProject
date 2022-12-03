import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Car} from "./car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  addCar(car: Car) {
    let savedToken = localStorage.getItem("token")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });

    let options = {headers: headerss};

    this.http.post<any>('https://localhost:7235/api/cars/add-car', {
      "name": car.name,
      "fuelType": Number(car.fuelType),
      "licencePlate": car.licencePlate,
      "userId": localStorage.getItem('userId')
    }, options).subscribe({
      next: data => {
        window.location.assign("/fuel-form");
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  getCars():Observable<Car[]> {
    let savedToken = localStorage.getItem("token")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });

    var userId: string = localStorage.getItem('userId')!;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userId", userId);
    return this.http.get<Car[]>('https://localhost:7235/api/cars/cars-user', {
      params: queryParams,
      headers: headerss
    });
  }
}
