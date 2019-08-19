import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  @Input() StartCount: number;

  count: number = 0;

  constructor() { }

  ngOnInit() {
    this.count = this.StartCount;
  }

  onAddButtonClick(amount) {
    this.count = this.count + amount;
  }

  onMinusClick() {
    this.count--;
  }

}
