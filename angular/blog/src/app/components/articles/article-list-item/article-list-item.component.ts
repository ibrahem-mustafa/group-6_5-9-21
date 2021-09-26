import { Component, Input, OnInit } from '@angular/core';
import { ARTICLE, defaultArticle } from '../../../interfaces/article.interface';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: ARTICLE = defaultArticle;
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
  }


  deleteArticle() {
    this.articlesService.deleteArticle(this.article._id);
  }

}
