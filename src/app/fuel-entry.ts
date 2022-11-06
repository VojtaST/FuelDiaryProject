export class FuelEntry {
  date:Date;
  nameOfFuelStation:string;
  totalPrice:number;
  pricePerLiter:number;
  amountLiters:number;
  dashboardKm:number;
  carId:string;

  constructor(date: Date, nameOfFuelStation: string, totalPrice: number, pricePerLiter: number, amountLiters: number, dashboardKm: number, carId: string) {
    this.date = date;
    this.nameOfFuelStation = nameOfFuelStation;
    this.totalPrice = totalPrice;
    this.pricePerLiter = pricePerLiter;
    this.amountLiters = amountLiters;
    this.dashboardKm = dashboardKm;
    this.carId = carId;
  }
}
