import {Component, OnInit} from '@angular/core';
import {FuelEntry} from "../fuel-entry";
import {FuelrecordService} from "../fuelrecord.service";
import {Car, FuelType} from "../car";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../car.service";

@Component({
  selector: 'app-fueltable',
  templateUrl: './fueltable.component.html',
  styleUrls: ['./fueltable.component.css']
})
export class FueltableComponent implements OnInit {
  reactiveForm!: FormGroup;
  displayedColumns: string[] = ['nameOfFuelStation', 'fuelAmount', 'dashboardKm', 'pricePerLiter', 'fuelTypeField', 'totalPrice', 'dateOfRefuel'];
  fuelTypes = FuelType;
  selected = new FormControl();
  fuelRecords: FuelEntry[] = [];
  cars: Car[] = [];
  car: Car | undefined;


  constructor(private fuelRecordService: FuelrecordService, private carService: CarService) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl()
    });
    this.carService.getCars().subscribe((response: Car[]) => this.cars = response);
    this.fuelRecordService.getFuelEntries().subscribe((response: FuelEntry[]) => this.fuelRecords = response);
  }

  getSelected(car: Car) {
    this.fuelRecordService.getFuelEntriesCarId(car.id).subscribe((response: FuelEntry[]) => this.fuelRecords = response);
  }
}
