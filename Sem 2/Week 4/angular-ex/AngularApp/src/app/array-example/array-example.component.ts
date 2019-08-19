import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-example',
  templateUrl: './array-example.component.html',
  styleUrls: ['./array-example.component.css']
})
export class ArrayExampleComponent implements OnInit {

  Names: string[] = ["Justin", "John", "Pete"];


  constructor() { }

  ngOnInit() {
  }

onButtonClick() {
  this.Names.push("Kobe");
}

}
