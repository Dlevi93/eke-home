import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app/app.settings';

@Injectable()
export class HomeSliderService {
  _http: HttpClient;
  articles: SliderArticle[];

  constructor(http: HttpClient) {
    this._http = http;
    console.log('Home event service loaded');
  }

  getLatestArticles(): Observable<SliderArticle[]> {
    return this._http.get(AppSettings.API_ENDPOINT + '/LatestArticleList').map((data: SliderArticle[]) => {
      this.articles = data;
      return data;
    });
  }

}

export interface SliderArticle {
  id: number;
  title: string;
  author: Author;
  mediaElements: Array<MediaElement>[];
}

export interface Author {
  name: string;
}

export interface MediaElement {
  originalName: string;
  name: string;
}
