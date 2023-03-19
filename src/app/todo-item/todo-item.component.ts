import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../data/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() newTodo: Todo | any;

  @Output() delete = new EventEmitter<number>();
  @Output() done = new EventEmitter<boolean>();

  handleDone() {
    this.done.emit(this.newTodo.status);
    this.newTodo.status = !this.newTodo.status;

    console.log(`This.newToDo.status: ${this.newTodo.id}`, this.newTodo.status);
  }

  handleDeleteTodo() {
    this.delete.emit(this.newTodo.id);
  }

  constructor() {}

  ngOnInit(): void {
    // console.log(this.author.id);
  }
}
