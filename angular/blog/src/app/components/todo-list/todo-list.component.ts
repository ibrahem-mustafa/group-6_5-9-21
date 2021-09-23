import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(
    private todosService: TodosService
  ) {

  }
  
  get todos() {
    return this.todosService.todos;
  }

  ngOnInit(): void {
    this.todosService.fetchTodos();
  }
}
