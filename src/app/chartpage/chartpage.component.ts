import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {FuelEntry} from "../fuel-entry";
import {FuelrecordService} from "../fuelrecord.service";
import {Car} from "../car";
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../car.service";

@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.component.html',
  styleUrls: ['./chartpage.component.css']
})
export class ChartpageComponent implements OnInit {
  public chart: any;
  public chartMileage: any;
  public charPricePerLiter: any;
  public chartTotalLiters: any;
  reactiveForm!: FormGroup;
  car: Car | undefined;
  fuelRecords: FuelEntry[] = [];
  selected = new FormControl();
  cars: Car[] = [];

  constructor(private fuelRecordService: FuelrecordService, private carService: CarService) {
  }

  async ngOnInit() {
    this.reactiveForm = new FormGroup({
      id: new FormControl()
    });
    this.carService.getCars().subscribe((response: Car[]) => this.cars = response);
    await this.getSelectedCarsCharts(this.cars[0]);
  }

  createChartTotalPrice(dataChart: number[], labelsChart: string[]) {
    if (this.chart != null) this.chart.destroy();
    this.chart = new Chart("ChartTotalPrice", {
      type: 'bar',
      data: {
        labels: labelsChart,
        datasets: [{
          label: 'Total prices of Refuels',
          data: dataChart,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createChartMileage(dataChart: number[], labelsChart: string[]) {
    if (this.chartMileage != null) this.chartMileage.destroy();

    this.chartMileage = new Chart("ChartMileage", {
      type: "line",
      data: {
        labels: labelsChart,
        datasets: [{
          label: "Mileage",
          data: dataChart
        }]
      },
      options: {}
    });
  }

  createChartPricePerLiter(dataChart: number[], labelsChart: string[]) {
    if (this.charPricePerLiter != null) this.charPricePerLiter.destroy();

    this.charPricePerLiter = new Chart("CharPricePerLiter", {
      type: "line",
      data: {
        labels: labelsChart,
        datasets: [{
          label: "Price Per Liter",
          data: dataChart
        }]
      },
      options: {}
    });
  }

  createChartTotalLiters(dataChart: number[], labelsChart: string[]) {
    if (this.chartTotalLiters != null) this.chartTotalLiters.destroy();

    this.chartTotalLiters = new Chart("ChartTotalLiters", {
      type: "line",
      data: {
        labels: labelsChart,
        datasets: [{
          label: "Liters Refueled",
          data: dataChart
        }]
      },
      options: {}
    });
  }

  async getSelectedCarsCharts(car: Car) {
    await this.fuelRecordService.getFuelEntriesCarId(car.id).subscribe((response: FuelEntry[]) => this.fuelRecords = response);
    this.createChartTotalPrice(this.fuelRecords.map((o) => o.totalPrice), this.fuelRecords.map((o) => o.dateOfRefuel.toString()));
    this.createChartMileage(this.fuelRecords.map((o) => o.dashboardKm), this.fuelRecords.map((o) => o.dateOfRefuel.toString()));
    this.createChartPricePerLiter(this.fuelRecords.map((o) => o.pricePerLiter), this.fuelRecords.map((o) => o.dateOfRefuel.toString()));
    this.createChartTotalLiters(this.fuelRecords.map((o) => o.fuelAmount), this.fuelRecords.map((o) => o.dateOfRefuel.toString()));
  }
}
