import { Component, ElementRef, ViewChild } from '@angular/core';
import { todos, Todo } from '../data/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {

  @ViewChild('focusInput') focusInput?: ElementRef<HTMLElement>;

  newTodos = todos;
  todoItem: string = '';
  selectedTodo = this.newTodos[0];

  ngOnInit(): void {
    this.focusInput?.nativeElement.focus();
  };
  
  onAdd() {
    let newTodo = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.todoItem,
      status: false,
    }

    if (this.todoItem !== '' && this.todoItem.indexOf(' ') === -1) {
      this.newTodos = [...this.newTodos, newTodo];
    } 

    this.todoItem = '';
    this.focusInput?.nativeElement.focus();
  }

  onDeleted(id: number) {
    this.newTodos = this.newTodos.filter(newTodo => {
      return newTodo.id !== id;
    })
  } 

  onDeletedAll() {
    this.newTodos = [];
  }
}
