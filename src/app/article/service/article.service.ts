import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app/app.settings';

@Injectable()
export class ArticleService {
  _http: HttpClient;

  article: Article;

  constructor(http: HttpClient) {
    this._http = http;
    console.log('Article event service loaded');
  }

  getArticleBySlug(slug: string): Observable<Article> {
    return this._http.get(AppSettings.API_ENDPOINT + '/GetNewsBySlug').map((data: Article) => {
      this.article = data;
      return data;
    });
  }

}

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  author: Author;
  mediaElements: Array<MediaElement>;
  description: string;
  dateAdded: Date;
}

export interface Author {
  name: string;
}

export interface MediaElement {
  originalName: string;
  name: string;
}
