import { Injectable } from '@angular/core';
import { Planet } from './Planet';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planets: Planet[] = [];

  constructor() { }

  addPlanet(name: string){
    this.planets.push(new Planet(name, 2, 3))
  }

}
