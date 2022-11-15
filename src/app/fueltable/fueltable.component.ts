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
  fuelTypes=FuelType;

  fuelRecords: FuelEntry[] = this.fuelRecordService.getFuelEntries();
  dataSource = this.fuelRecords;

  constructor(private fuelRecordService: FuelrecordService) {
  }

  ngOnInit(): void {
  }

}
