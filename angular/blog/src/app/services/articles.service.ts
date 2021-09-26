import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTICLE } from '../interfaces/article.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  articles: ARTICLE[] = [];

  fetchArticles() {
    this.http.get<{
      articles: ARTICLE[]
    }>('http://localhost:3000/articles/getArticles', {
      headers: {
        authorization: this.userService.getToken()
      }
    }).subscribe(
      data => this.articles = data.articles,
      err => console.log(err)
    )
  }
}
