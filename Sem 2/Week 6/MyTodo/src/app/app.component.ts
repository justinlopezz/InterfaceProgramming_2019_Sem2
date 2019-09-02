import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Todo[] = [];

  addItem(newItem: Todo) {
    this.items.push(newItem);
  }

  deleteMsg(msg: Todo) {
    const index: number = this.items.indexOf(msg);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
  } 

  title = 'MyTodo';

}
