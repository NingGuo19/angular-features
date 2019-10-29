import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero';

@Component({
  selector: 'app-feature-display',
  templateUrl: './feature-display.component.html',
  styleUrls: ['./feature-display.component.css']
})
export class FeatureDisplayComponent implements OnInit {

  heroes: Hero[];
  myHero: Hero;
  constructor() { }

  ngOnInit() {
    this.heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  this.myHero = this.heroes[0];
  //window.alert(this.myHero.name);
  }

  getVal(){
    return this.heroes.length;
  }

}