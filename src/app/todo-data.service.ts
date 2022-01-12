import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];
  
  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService{
    this.todos = this.todos
      .filter(todo => todo.id !== id);
      return this;
  }

  // Simulate GET /todos
  getAllTodos():Todo[]{
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    let todo = this.todos
      .filter(todo => todo.id === id);
      return todo[0];
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}):Todo{
    let todo = this.getTodoById(id);
    if(!todo){
      return new Todo({});
    }

    Object.assign(todo, values);
    return todo;
  }

  //Toggle todo completed
  toggleTodoCompleted(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      completed: !todo.completed
    });
    return updatedTodo;
  }

  constructor() { }
}
