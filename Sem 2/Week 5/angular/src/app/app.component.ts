import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: string[] = ["Sleep", "Work"];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  deleteMsg(msg: string) {
    const index: number = this.items.indexOf(msg);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
  } 

  CurrentDate = new Date();

  title = 'angular';

  onkeyup(input: string){

  }
}

