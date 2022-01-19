export class Adress {
  private _id: number;
  private _street: string;
  private _suit:string;
  private _city:string;
  private _zipCode:number;

  constructor(id:number,street:string,suit:string,city:string,zipCode:number){
    this._id=id;
    this._street=street;
    this._suit=suit;
    this._city=city;
    this._zipCode=zipCode

  }

  public get id(): number {
    return this._id;
}

public set id(value: number) {
    this.id = value;
}

public get street(): string {
  return this._street;
}

public set street(value: string) {
  this._street = value;
}

public get suit(): string {
  return this._suit;
}

public set suit(value: string) {
  this.suit = value;
}

public get city(): string {
  return this._city;
}

public set city(value: string) {
  this._city = value;
}

public get zipCode():number{
  return this._zipCode
}
 public set zipCode(value: number){
   this._zipCode=value;
 }
}

// export interface AdressConstructor {
//   new (id: number, street: string, suit:string,city:string,zipCode:number): Adress;
//   clone(): Adress;
// }
// export var Adress: AdressConstructor;
