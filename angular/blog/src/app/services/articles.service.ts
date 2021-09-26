import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTICLE } from '../interfaces/article.interface';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  articles: ARTICLE[] = [];

  errors: string[] = [];


  getArticleById(id: string) {
    return this.articles.find(art => art._id == id);
  }

  baseUrl: string = 'http://localhost:3000/articles'
  get defaultOptions() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  generateError(msg: string) {
    this.errors.push(msg);

    setTimeout(() => {
      const errIndex = this.errors.indexOf(msg);
      this.errors.splice(errIndex, 1);
    }, 1500);
  }

  fetchArticles() {
    this.http.get<{
      articles: ARTICLE[]
    }>(`${this.baseUrl}/getArticles`, this.defaultOptions).subscribe(
      data => this.articles = data.articles,
      err => {
        this.generateError('Failed To Fetch Articles');
      }
    )
  }

  createArticle(data: {title: string, content: string}) {
    this.http.post(`${this.baseUrl}/createArticle`, data, this.defaultOptions).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => {
        this.generateError('Failed To Create Article');
       
      }
    );
  }

  updateArticle(id: string, data: { title: string, content: string }) {
    this.http.put(`${this.baseUrl}/updateArticle/${id}`, data, this.defaultOptions).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => {
       this.generateError('Failed To Update Article');
      }
    )
  }


  deleteArticle(id: string) {
    this.http.delete(`${this.baseUrl}/deleteArticle/${id}`, this.defaultOptions).subscribe(
      data => {
        const articleIndex = this.articles.findIndex(art => art._id == id);
        if (articleIndex == -1) return;
        this.articles.splice(articleIndex, 1);
      },
      err => {
        this.generateError('Failed To Delete Article');
      }
    ) 
  }
}
