import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  
  editMode: boolean = false;
  id: string = '';
  title: string = '';
  content: string = '';


  get errors() {
    return this.articlesService.errors;
  }

  ngOnInit(): void {

    const idParam = this.route.snapshot.params.id

    if (idParam != 'new') {
      this.editMode = true;
      this.id = idParam;

      const article = this.articlesService.getArticleById(this.id);

      if (!article) return;
      this.title = article.title;
      this.content = article.content;
    }
  }

  submit() {
    
    const data = {
      title: this.title,
      content: this.content,
    };
    
    
    if (!this.editMode) {
      this.articlesService.createArticle(data);
    } else {
      this.articlesService.updateArticle(this.id, data)
    }
  }

}
