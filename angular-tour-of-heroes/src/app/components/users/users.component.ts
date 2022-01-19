import { UserService } from './../../services/user.service';
import { Geo } from './../../geo';
import { Adress } from './../../adress';
import { User } from './../../users';
import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title='Users';

   usersResult:any;
   user?:User;
   name?:string;
  //  ad: Adress = new Adress(1,'Avenu','5','Ixelles',1050);
  //  geoL: Geo = new Geo('','');

  constructor(private userService:UserService) {


   }
  //  user : User={
  //   id:1,
  //   name: 'Rabi',
  //   username :'rda',
  //   email: 'rabidarhnaj@yahoo.fr',
  //   adress:new Adress(1,'Avenu','5','Ixelles',1050),
  //   geo:new Geo('121','123'),
  //   phone:"0485137165"
  // };
  ngOnInit(): void {
 this.userService.getUsers().subscribe((data:any)=>{
   this.usersResult=data;
 })
this.getUser();
  }

getUser(){
  this.userService.getUserById(2).subscribe((data:User)=>{
       this.name=data.name;
       this.user=data;


  })
}

}
