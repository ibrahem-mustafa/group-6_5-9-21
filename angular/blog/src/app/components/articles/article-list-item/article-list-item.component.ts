import { Component, Input, OnInit } from '@angular/core';
import { ARTICLE, defaultArticle } from '../../../interfaces/article.interface';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: ARTICLE = defaultArticle;
  constructor() { }

  ngOnInit(): void {
  }

}
