import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../Planet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  name : Planet[];

  constructor(public service: PlanetService) { }

  ngOnInit() {
  }

  deletePlanet(planet : Planet){
    this.service.DeletePlanet(planet);
  }
}
