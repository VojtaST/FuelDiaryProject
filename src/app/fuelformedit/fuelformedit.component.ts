import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../car";
import {FuelrecordService} from "../fuelrecord.service";
import {CarService} from "../car.service";
import {FuelEntry} from "../fuel-entry";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-fuelformedit',
  templateUrl: './fuelformedit.component.html',
  styleUrls: ['./fuelformedit.component.css']
})
export class FuelformeditComponent implements OnInit {

  title = "Fuel Record";
  reactiveForm!: FormGroup;
  cars: Car[] = [];
  fuelEntry!: FuelEntry;
  recordId!: string;

  constructor(private toastr: ToastrService, private fuelService: FuelrecordService, private carService: CarService, private route: ActivatedRoute, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.recordId = this.route.snapshot.paramMap.get('id') || '';
    this.carService.getCars().subscribe((response: Car[]) => this.cars = response);

    //await this.fuelService.getFuelEntry(this.recordId).toPromise().subscribe((response: FuelEntry) => this.fuelEntry = response);
    var fuelRecordEntry = await (this.fuelService.getFuelEntry(this.recordId)).toPromise();

    this.reactiveForm = new FormGroup({
      id: new FormControl(this.recordId),
      nameOfFuelStation: new FormControl(fuelRecordEntry?.nameOfFuelStation),
      pricePerLiter: new FormControl(fuelRecordEntry?.pricePerLiter, [Validators.required, Validators.min(0)]),
      fuelAmount: new FormControl(fuelRecordEntry?.fuelAmount, [Validators.required, Validators.min(0)]),
      dashboardKm: new FormControl(fuelRecordEntry?.dashboardKm, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]),
      carId: new FormControl(fuelRecordEntry?.carId, [Validators.required]),
      totalPrice: new FormControl(fuelRecordEntry?.totalPrice, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]),
      dateOfRefuel: new FormControl(fuelRecordEntry?.dateOfRefuel)
    });


  }

  get nameOfFuelStation() {
    return this.reactiveForm.get("nameOfFuelStation");
  }

  get pricePerLiter() {
    return this.reactiveForm.get("pricePerLiter");
  }

  get fuelAmount() {
    return this.reactiveForm.get("fuelAmount");
  }

  get dashboardKm() {
    return this.reactiveForm.get("dashboardKm");
  }

  get carId() {
    return this.reactiveForm.get("carId");
  }

  get totalPrice() {
    return this.reactiveForm.get("totalPrice");
  }

  get dateOfRefuel() {
    return this.reactiveForm.get("dateOfRefuel");
  }

  editFuelRecord(fuelEntry: FuelEntry) {
    this.fuelService.editFuelRecord(fuelEntry);
  }

}
