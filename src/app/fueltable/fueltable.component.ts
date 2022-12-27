import {Component, OnInit} from '@angular/core';
import {FuelEntry} from "../fuel-entry";
import {FuelrecordService} from "../fuelrecord.service";
import {Car, FuelType} from "../car";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../car.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fueltable',
  templateUrl: './fueltable.component.html',
  styleUrls: ['./fueltable.component.css']
})
export class FueltableComponent implements OnInit {
  reactiveForm!: FormGroup;
  displayedColumns: string[] = ['nameOfFuelStation', 'fuelAmount', 'dashboardKm', 'pricePerLiter', 'totalPrice', 'dateOfRefuel', 'actions'];
  fuelTypes = FuelType;
  selected = new FormControl();
  fuelRecords: FuelEntry[] = [];
  cars: Car[] = [];
  car: Car | undefined;


  constructor(private fuelRecordService: FuelrecordService, private carService: CarService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl()
    });
    this.carService.getCars().subscribe({
      next: data => {
        this.cars = data
      },
      error: error => {
        if (error.status == 401) {
          this.toastr.error("Neautorizovaný přístup ", error.status);
        } else {
          this.toastr.error("Chybka :) ", error.status);
        }
      }
    });

    this.fuelRecordService.getFuelEntries().subscribe({
      next: data => {
        this.fuelRecords = data
      },
      error: error => {
        if (error.status == 401) {
          this.toastr.error("Neautorizovaný přístup ", error.status);
        } else {
          this.toastr.error("Chybka :) ", error.status);
        }
      }
    });
  }

  getSelected(car: Car) {
    this.fuelRecordService.getFuelEntriesCarId(car.id).subscribe({
      next: data => {
        this.fuelRecords = data
        this.toastr.success("Data Načtena ");
      },
      error: error => {
        if (error.status == 401) {
          this.toastr.error("Neautorizovaný přístup ", error.status);
        } else {
          this.toastr.error("Chybka :) ", error.status);
        }
      }
    });
  }

  edit(id: string) {
    window.location.assign(`/${id}/fuel-form-edit`);
  }
}
