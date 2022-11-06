export class Car {
  name:string;
  licencePlate:string;
  fuelType:FuelType;
  id:string;

  constructor(name: string, licencePlate: string, fuelType: FuelType, id: string) {
    this.name = name;
    this.licencePlate = licencePlate;
    this.fuelType = fuelType;
    this.id = id;
  }


}
export enum FuelType{
  GAS = 0,
  OIL = 1
}
