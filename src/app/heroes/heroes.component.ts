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

  edit(hero: Hero) {
    this.editHero = hero;
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

  update() {
    if (this.editHero) {
    this.heroesservice
        .updateHero(this.editHero)
        .subscribe(hero => {
        // replace the hero in the heroes list with update from server
        const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
        if (ix > -1) {
          this.heroes[ix] = hero;
        }
      });
      this.editHero = undefined;
    }
  }

  search(searchTerm: string) {
    this.editHero = undefined;
    if (searchTerm) {
      this.heroesservice
        .searchHeroes(searchTerm)
        .subscribe(heroes => (this.heroes = heroes));
    }
  }

}