import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../Planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {
  planetName : string;
  planetMoons : string;
  planetDistance: string;

  constructor(private service : PlanetService) { }

  ngOnInit() {
  }

  OnPlanetClick(){
    this.service.addPlanet(new Planet(this.planetName, parseInt(this.planetMoons), parseInt(this.planetDistance)))
  }

  onSortClick(){
    this.service.sortPlanet(this.planetDistance)
  }
}
