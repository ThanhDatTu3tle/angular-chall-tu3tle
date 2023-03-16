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
    this.newTodos = [...this.newTodos, newTodo];

    this.todoItem = '';
  }

  onDeleted(id: number) {
    this.newTodos = this.newTodos.filter(newTodo => {
      return newTodo.id !== id;
    })
  } 

  onSelected(selectedTodo: Todo) {
    this.selectedTodo = selectedTodo;
    console.log(this.selectedTodo)
  }

  onDone(status: boolean) {
    this.newTodos = this.newTodos.map(newTodo => {
      this.selectedTodo = this.selectedTodo
      newTodo.status = !newTodo.status;
      console.log(this.newTodos)
      return newTodo;
    })
  }

  onDeletedAll() {
    this.newTodos = [];
  }
}
