import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app/app.settings';

@Injectable()
export class HomeNewsService {
  _http: HttpClient;
  newsArticles: HomeNewsArticle[];

  constructor(http: HttpClient) {
    this._http = http;
    console.log('HomeNews service loaded');
  }

  getArticles(): Observable<HomeNewsArticle[]> {
    return this._http.get(AppSettings.API_ENDPOINT + '/HomeNews').map((data: HomeNewsArticle[]) => {
      this.newsArticles = data;
      return data;
    });
  }

}

export interface HomeNewsArticle {
  id: number;
  title: string;
  author: Author;
  mediaElements: Array<MediaElement>[];
  dateAdded: Date;
  description: string;
}

export interface Author {
  name: string;
}

export interface MediaElement {
  originalName: string;
  name: string;
}
