import {Injectable} from '@angular/core';
import {FuelEntry} from "./fuel-entry";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuelrecordService {
  items: FuelEntry[] = [];

  public getFuelEntries(): Observable<FuelEntry[]> {

    return this.http.get<FuelEntry[]>('https://localhost:7235/api/fuelrecords/fuel-records-car?carId=aaaa');

  }

  constructor(private http: HttpClient) {
  }
}
