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

  public getFuelEntries(): Observable<FuelEntry[]> {
    let savedToken = localStorage.getItem("token")!;
    let userId = localStorage.getItem("userId")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });
    return this.http.get<FuelEntry[]>(`https://localhost:7235/api/fuelrecords/fuel-records-user?userId=${userId}`, {headers: headerss});
  }

  public getCars(): Observable<Car[]> {
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

  constructor(private http: HttpClient) {
  }

  getFuelEntriesCarId(id: string):Observable<FuelEntry[]> {
    let savedToken = localStorage.getItem("token")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });
    return this.http.get<FuelEntry[]>(`https://localhost:7235/api/fuelrecords/fuel-records-car?carId=${id}`, {headers: headerss});
  }
}
