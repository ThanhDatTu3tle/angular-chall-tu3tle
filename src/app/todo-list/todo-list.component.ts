import { Component } from '@angular/core';
import { todos, Todo } from '../data/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {

  newTodos = todos;
  todoItem: string = '';
  selectedTodo = this.newTodos[0];
  
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
