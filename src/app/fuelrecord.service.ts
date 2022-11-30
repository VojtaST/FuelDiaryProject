import {Injectable} from '@angular/core';
import {FuelEntry} from "./fuel-entry";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuelrecordService {
  items: FuelEntry[] = [];

  public getFuelEntries(): Observable<FuelEntry[]> {
    let  savedToken = localStorage.getItem("token")!;
    let headerss = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': savedToken
    });
    return this.http.get<FuelEntry[]>('https://localhost:7235/api/fuelrecords/fuel-records-car?carId=aaaa',{headers:headerss});
  }

  constructor(private http: HttpClient) {
  }
}
