import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Planet } from '../Planet';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  @Input() planet : Planet;

  @Output() deleteClicked : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  deletePlanet() {
    this.deleteClicked.emit()
  } 

}