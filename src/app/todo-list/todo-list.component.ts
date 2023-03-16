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

  // newTodo: any = {
  //   id: Math.floor(Math.random() * 1000) + 1,
  //   name: '',
  //   status: false
  // }
  
  onAdd() {
    let newTodo = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.todoItem,
      status: false
    }
    this.newTodos = [...this.newTodos, newTodo];

    this.todoItem = '';
    
  }

  onDeleted(id: number) {
    // this.todos = this.todos.filter(todo => {
    //   return todo.id !== id;
    // })
  } 

  onDeletedAll() {
    this.newTodos = [];
  }
}
