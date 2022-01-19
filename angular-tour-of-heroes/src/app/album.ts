export class Album {
  private _id: number;
  private _title: string;
  private _userId:number;



  constructor(id:number,title:string,userId:number){
    this._id = id;
    this._title =title;
    this._userId =userId;

  }

  public get id(): number {
    return this._id;
}

public set id(value: number) {
    this.id = value;
}
public get title(): string {
  return this._title;
}

public set title(value: string) {
  this._title = value;
}

public get userId(): number {
  return this._userId;
}

public set userId(value: number) {
  this._userId = value;
}



}
