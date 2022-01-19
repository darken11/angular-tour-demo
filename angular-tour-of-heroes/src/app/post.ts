export class Post {
  private _id: number;
  private _title: string;
  private _body:string;
  private _userId:number;



  constructor(id:number,title:string,body:string,userId:number){
    this._id = id;
    this._title =title;
    this._body =body;
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
public get body(): string {
  return this._body;
}

public set body(value: string) {
  this._body = value;
}
public get userId(): number {
  return this._userId;
}

public set userId(value: number) {
  this._userId = value;
}
}
