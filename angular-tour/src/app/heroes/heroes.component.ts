import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { retry } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]=[];
  constructor(private heroervice:HeroService){}
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroervice.getHeroes().subscribe(data=>this.heroes=data);
  }

add(name:string){
  name=name.trim();
  if(!name){return;}
  this.heroervice.addHero({name} as Hero).subscribe(hero=>this.heroes.push(hero));
}
delete(hero: Hero){
  this.heroes= this.heroes.filter(h=> h !==hero);
  this.heroervice.deleteHero(hero.id).subscribe();
}

}
