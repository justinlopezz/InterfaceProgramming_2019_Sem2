import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-todo-list',
  templateUrl: './my-todo-list.component.html',
  styleUrls: ['./my-todo-list.component.css']
})
export class MyTodoListComponent implements OnInit {

    @Input()

    items: string[];

    @Output() newItemEvent = new EventEmitter<string>();

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }

  constructor() { }

  ngOnInit() {
  }

}
