import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'TodoApp';

  newTodo: Todo = new Todo();
  test : string = this.newTodo.title;

  constructor(private todoService: TodoDataService){}

  addTodo(){
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoCompleted(todo: Todo){
    this.todoService.toggleTodoCompleted(todo);
  }

  removeTodo(todo: Todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}

