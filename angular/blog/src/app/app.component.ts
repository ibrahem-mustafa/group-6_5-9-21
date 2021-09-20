import { Component } from '@angular/core';

// const {Component} = require('@angular/core');

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
      color: this.isHeader ? 'skyblue': 'green',
      fontSize: this.isHeader ? '2rem' : '1.5rem',
      fontWeight: this.isHeader ? 'bold' : '500',
      textDecoration: this.isHeader ? 'underline' : 'none',
      fontStyle: this.isHeader ? 'none' : 'italic'
    };
  }


  password = '';
  
  updatePassword(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    this.password = target.value;

    console.log(this.password)
  }

}
