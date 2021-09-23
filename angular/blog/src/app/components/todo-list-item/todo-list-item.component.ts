import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todoData: {
    title: string,
    id: number
  } = {
      title: '',
      id: new Date().getTime()
  }

  // @Output() itemClicked = new EventEmitter()

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
  }


  deleteItem() {
    // this.itemClicked.emit(this.todoData.id)
    this.todosService.deleteTodo(this.todoData.id);

  }

}
