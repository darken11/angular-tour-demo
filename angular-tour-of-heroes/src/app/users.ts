import { Adress } from "./adress";
import { Geo } from "./geo";

export interface User {
  id: number;
  name: string;
  username:string;
  email:string;
  adress:Adress;

  geo:Geo;
  phone:string;

}
