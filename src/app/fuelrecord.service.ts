import { Injectable } from '@angular/core';
import {FuelEntry} from "./fuel-entry";

@Injectable({
  providedIn: 'root'
})
export class FuelrecordService {
  items:FuelEntry[]=[];

  getFuelEntries()
  {
    return this.items;
  }
  constructor() { }
}
