import { Injectable } from '@angular/core';
import { Planet } from './Planet';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planets: Planet[] = [];

  constructor() { }

  addPlanet(planet: Planet){
    this.planets.push(planet)
  }

  sortPlanet(DistanceFromSun){
    this.planets = this.planets.sort(function (a,b) {
      var x = a.DistanceFromSun;
      var y = b.DistanceFromSun;
      return x < y ? -1 : x > y ? 1 : 0;
    });

  }

  DeletePlanet(planet : Planet){
    const index: number = this.planets.indexOf(planet);
    if (index !== -1) {
        this.planets.splice(index, 1);
    }
  }

}
