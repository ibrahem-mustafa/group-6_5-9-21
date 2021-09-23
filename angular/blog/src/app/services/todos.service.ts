import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  todos: TODO_INTERFACE[] = [];

  fetchTodos() {
    this.http
      .get<TODO_INTERFACE[]>('http://jsonplaceholder.typicode.com/todos/?_limit=20')
      .subscribe(
        (data) => (this.todos = data),
        (err) => console.log(err)
      );
  }

  deleteTodo(id: number) {
    const todoIndex = this.todos.findIndex((t) => t.id == id);

    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
    }
  }

  addTodo(todo: { title: string; id: number, completed: boolean }) {
    this.todos.push(todo);
  }
}

type USER_TYPE = 'admin' | 'publisher' | 'client';

type TODO = {
  title: string;
  id: number;
  completed: boolean;
};

const todoVariable: TODO = {
  title: '',
  id: 0,
  completed: false,
};

interface TODO_INTERFACE {
  title: string;
  id: number;
  completed: boolean;
}

class TodoClass implements TODO_INTERFACE {
  title = '';
  id= 0;
  completed = false;
}

interface BASE_USER {
  name: string;
  email: string;
  password: string;
}

interface ADMIN_USER extends BASE_USER {
  adminToken: string
}

const admin: ADMIN_USER = {
  name: 'ahmed',
  email: 'ahmed@gmail.com',
  password: 'asdlkfjlksajdfkj',
  adminToken: 'aflkdshfkjhdaskjfhfasldkjflkasjldfkjsalkdjlksadd',
};


interface PUBLISHER_USER extends BASE_USER {
  publisherToken: string;
  gender: string;
  birthDate: string;
}

const publisher: PUBLISHER_USER = {
  name: 'publisher',
  email: 'publisher@gmail.com',
  password: 'asdlkfjlksajdfkj',
  publisherToken: 'afdlkjalsdjflkajsdlkfjasldkjfl',
  gender: 'male',
  birthDate: '18/2/2027',
  
};
