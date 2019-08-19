import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name: string;

  title = 'AngularApp';
  Name1 = ' Justin Lopez';
  age = '18';


  onKeyUp(input: string) {
    this.Name1 = input;
  }
}


