import { TodoRequestBean } from './../../common/todo-request-bean';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/common/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpService: HttpClient
    ) { }

    retrieveAllTodos(username): any {
      const todoRequestBean = new TodoRequestBean(username, '');
     return this.httpService.post('http://localhost:8080/todos/getAll', JSON.stringify(todoRequestBean),
        {headers : new HttpHeaders({ 'Content-Type': 'application/json' })} );
    }
}
