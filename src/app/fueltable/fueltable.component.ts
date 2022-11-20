import {Component, OnInit} from '@angular/core';
import {FuelEntry} from "../fuel-entry";
import {FuelrecordService} from "../fuelrecord.service";
import {FuelType} from "../car";

@Component({
  selector: 'app-fueltable',
  templateUrl: './fueltable.component.html',
  styleUrls: ['./fueltable.component.css']
})
export class FueltableComponent implements OnInit {

  displayedColumns: string[] = ['nameOfFuelStation', 'fuelAmount', 'dashboardKm', 'pricePerLiter', 'fuelTypeField', 'totalPrice', 'dateOfRefuel'];
  fuelTypes = FuelType;

  fuelRecords: FuelEntry[] = [];

  constructor(private fuelRecordService: FuelrecordService) {
  }

  ngOnInit(): void {
    this.fuelRecordService.getFuelEntries().subscribe((response: FuelEntry[]) => this.fuelRecords = response);
  }
}
