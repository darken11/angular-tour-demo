export class Photo {
  private _albumId:number;
  private _id: number;
  private _title: string;
  private _thumbnailUrl:string;




  constructor(albumId:number,id:number,title:string,thumbnailUrl:string){
    this._id = id;
    this._title =title;
    this._thumbnailUrl =thumbnailUrl;
    this._albumId =albumId;

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
public get thmbnailUrl(): string {
  return this._thumbnailUrl;
}

public set thumbnailUrl(value: string) {
  this._thumbnailUrl = value;
}
public get albumId(): number {
  return this._albumId;
}

public set albumId(value: number) {
  this._albumId = value;
}
}
