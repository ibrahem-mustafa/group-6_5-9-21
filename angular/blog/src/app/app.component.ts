import { Component } from '@angular/core';

// const {Component} = require('@angular/core');
type USER_TYPE = 'admin' | 'client' | 'publisher'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Publishers';
  subTitle = 'Hello';

  isHomePage = true;

  isHeader = true;

  pageTitle() {
    return 'This Is Page Title';
  }

  pageContentClasses() {
    return this.isHomePage ? 'header title bold static' : 'subheader';
  }

  showPassword = false;

  // !false => true

  // !showPassword => true

  // showPassword = !showPassword => true

  // !true => false

  // !showPassword => false

  // showPassword = !showPassword => false

  togglePasswordView() {
    this.showPassword = !this.showPassword;
  }

  classes() {
    return {
      header: this.isHeader,
      bold: this.isHeader,
      underline: this.isHeader,
      subHeader: !this.isHeader,
      italic: !this.isHeader,
    };
  }

  styles() {
    return {
      color: this.isHeader ? 'skyblue' : 'green',
      fontSize: this.isHeader ? '2rem' : '1.5rem',
      fontWeight: this.isHeader ? 'bold' : '500',
      textDecoration: this.isHeader ? 'underline' : 'none',
      fontStyle: this.isHeader ? 'none' : 'italic',
    };
  }

  password = '13454354';
  email = '';

  // updatePassword(e: KeyboardEvent) {
  //   const target = e.target as HTMLInputElement;
  //   this.password = target.value;

  //   console.log(this.password)
  // }

  // updatePassword(input: HTMLInputElement) {
  //   this.password = input.value;

  //   console.log(this.password)
  // }

  isLoggedIn = false;

  toggleSigninState() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // userType: USER_TYPE = 'publisher';
  userType = 'admin';

  todos: { title: string, id: number }[] = [
    {title: 'todo1', id: 1},
    {title: 'todo2', id: 2},
    {title: 'todo3', id: 3},
    {title: 'todo4', id: 4},
  ]

}
