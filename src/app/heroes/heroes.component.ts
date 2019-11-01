import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Hero } from '../data/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesservice: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesservice.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }




}