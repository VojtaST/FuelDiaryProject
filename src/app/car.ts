export class Car {
  name:string;
  licencePlate:string;
  fuelType:FuelType;

  constructor(name: string, licencePlate: string, fuelType: FuelType) {
    this.name = name;
    this.licencePlate = licencePlate;
    this.fuelType = fuelType;
  }
}
export enum FuelType{
  GAS = 0,
  OIL = 1
}
