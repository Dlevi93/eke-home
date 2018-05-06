import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app/app.settings';

@Injectable()
export class NewsbarService {
  _http: HttpClient;
  events: Events[];

  constructor(http: HttpClient) {
    this._http = http;
    console.log('Newsbar event service loaded');
  }

  getLatestElements(): Observable<Events[]> {
    return this._http.get(AppSettings.API_ENDPOINT + '/LatestElementList').map((data: Events[]) => {
      this.events = data;
      return data;
    });
  }

}

export interface Events {
  id: number;
  title: string;
  eventStartDate: Date;
  eventEndDate: Date;
}
