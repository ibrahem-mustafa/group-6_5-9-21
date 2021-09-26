import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/sigin/sigin.component';
import { HomeComponent } from './views/home/home.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { DefaultFooterComponent } from './components/footers/default-footer/default-footer.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { ArticleListItemComponent } from './components/articles/article-list-item/article-list-item.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DefaultBarComponent,
    DefaultFooterComponent,
    NotfoundComponent,
    ArticleListComponent,
    ArticleListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
