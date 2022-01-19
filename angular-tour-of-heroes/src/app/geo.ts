
export class Geo{
  private _latitude:string;
  private _langitude:string;

  constructor (lat:string, lang:string){
    this._latitude=lat;
    this._langitude=lang;
  }
  public get latitude():string{
    return this._latitude;
  }
  public set latitude(value:string){
     this._latitude=value;
  }


  public get langitude():string{
    return this._langitude;
  }
  public set langitude(value:string){
    this._langitude=value;
 }
}


