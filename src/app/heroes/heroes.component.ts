import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: "windstorm",
  };

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
