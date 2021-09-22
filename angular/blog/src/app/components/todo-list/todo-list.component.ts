import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos: string[] = ['todo1', 'todo2', 'todo3'];

  deleteTodo(todo: string) {
    const todoIndex = this.todos.indexOf(todo);

    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
    }
  }

}
