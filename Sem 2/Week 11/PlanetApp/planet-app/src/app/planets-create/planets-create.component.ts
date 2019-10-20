import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  constructor(private service : PlanetService) { }

  ngOnInit() {
  }

}
