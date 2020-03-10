import { Todo } from './../common/todo';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo/todo-data-service.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  private todos: Todo[];

  constructor(
    private todoDataService: TodoDataService
  ) { }

  ngOnInit() {
    console.log('test');
    const response = this.todoDataService.retrieveAllTodos('kishan');
    response.subscribe(
      res => {
        console.log(res);
          this.todos = <Todo[]>res;
      },
      error => {
        console.log(error);
      });
  }

}
