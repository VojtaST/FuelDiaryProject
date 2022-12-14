export class FuelEntry {
  id: string;
  dateOfRefuel: Date;
  nameOfFuelStation: string;
  totalPrice: number;
  pricePerLiter: number;
  fuelAmount: number;
  dashboardKm: number;
  carId: string;

  constructor(id: string, dateOfRefuel: Date, nameOfFuelStation: string, totalPrice: number, pricePerLiter: number, fuelAmount: number, dashboardKm: number, carId: string) {
    this.dateOfRefuel = dateOfRefuel;
    this.nameOfFuelStation = nameOfFuelStation;
    this.totalPrice = totalPrice;
    this.pricePerLiter = pricePerLiter;
    this.fuelAmount = fuelAmount;
    this.dashboardKm = dashboardKm;
    this.carId = carId;
    this.id=id;
  }
}
