export class FuelEntry {
  date:Date;
  nameOfFuelStation:string;
  totalPrice:number;
  pricePerLiter:number;
  fuelAmount:number;
  dashboardKm:number;
  carId:string;

  constructor(date: Date, nameOfFuelStation: string, totalPrice: number, pricePerLiter: number, fuelAmount: number, dashboardKm: number, carId: string) {
    this.date = date;
    this.nameOfFuelStation = nameOfFuelStation;
    this.totalPrice = totalPrice;
    this.pricePerLiter = pricePerLiter;
    this.fuelAmount = fuelAmount;
    this.dashboardKm = dashboardKm;
    this.carId = carId;
  }
}
