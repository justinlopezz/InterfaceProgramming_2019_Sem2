import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Input()

  items: Todo[];

  @Output() newItemEvent = new EventEmitter<Todo>();

  addNewItem(value: Todo) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }


}
