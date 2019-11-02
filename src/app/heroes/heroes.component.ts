import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { HeroesService } from './heroes.service';
import { Hero } from '../data/hero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  editHero: Hero; 

  constructor(private heroesservice: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesservice.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesservice
      .deleteHero(hero.id)
      .subscribe();
  }

  add( name: string ){
    this.editHero = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    // The server will generate the id for this new hero
    const newHero: Hero = { name } as Hero;
    this.heroesservice
      .addHero(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }
}