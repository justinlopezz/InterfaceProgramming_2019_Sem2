import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo("Completed this task", false));
    this.todos.push(new Todo("Adding supported components", false));
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  title = 'Todo';
}
