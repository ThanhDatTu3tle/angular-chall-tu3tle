import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../data/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo | any;
  @Output() select = new EventEmitter<Todo>();
  @Output() add = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<number>();

  handleShowInfoOfAuthor() {
    this.select.emit(this.todo);
  }

  handleAddTodo() {
    this.add.emit(this.todo);
  }

  handleDoneTodo() {
    this.delete.emit(this.todo.id);
  }

  handleDeleteTodo() {
    this.delete.emit(this.todo.id);
  }

  constructor() {}

  ngOnInit(): void {
    // console.log(this.author.id);
  }
}
