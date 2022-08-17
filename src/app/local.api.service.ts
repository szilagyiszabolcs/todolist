import { Injectable } from "@angular/core";
import { ApiService } from "codefoxui";
import { Observable } from "rxjs";
import { TodolistComponent } from "./components/todolist/todolist.component";
import { TodoEditor, TodoItem } from "./interfaces";

@Injectable({
    providedIn: 'root'
})

export class LocalApiService {
    getTodoList(): Observable<{
        todoList: TodoItem[]
    }> {
        return this.apiService.get('todos');
    }

    getTodoItem(todoId: number): Observable<{
        todoEditor: TodoEditor
    }> {
        return this.apiService.get('todos/' + todoId.toString())
    }

    createTodoItem(item: TodoEditor): Observable<{}> {
        return this.apiService.post('todos', item);
    }

    updateTodoItem(todoId: number, item: TodoEditor): Observable<{}> {
        return this.apiService.patch('todos/' + todoId.toString(), item);
    }

    deleteTodoItem(todoId: number): Observable<{}> {
        return this.apiService.delete('todos/' + todoId.toString());
    }

    constructor(
        private apiService: ApiService
    ) {
        this.apiService.apiBaseUrl = 'http://localhost:7777';
    }
}