export class FuelEntry {
  dateOfRefuel:Date;
  nameOfFuelStation:string;
  totalPrice:number;
  pricePerLiter:number;
  fuelAmount:number;
  dashboardKm:number;
  carId:string;

  constructor(dateOfRefuel: Date, nameOfFuelStation: string, totalPrice: number, pricePerLiter: number, fuelAmount: number, dashboardKm: number, carId: string) {
    this.dateOfRefuel = dateOfRefuel;
    this.nameOfFuelStation = nameOfFuelStation;
    this.totalPrice = totalPrice;
    this.pricePerLiter = pricePerLiter;
    this.fuelAmount = fuelAmount;
    this.dashboardKm = dashboardKm;
    this.carId = carId;
  }
}
