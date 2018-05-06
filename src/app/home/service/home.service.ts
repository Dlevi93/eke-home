import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app/app.settings';

@Injectable()
export class HomeService {
  _http: HttpClient;
  events: CalendarEvent[];

  constructor(http: HttpClient) {
    this._http = http;
    console.log('Home event service loaded');
  }

  getEvents(): Observable<CalendarEvent[]> {
    return this._http.get(AppSettings.API_ENDPOINT + '/EventList').map((data: CalendarEvent[]) => {
      this.events = data;
      return data;
    });
  }

}

export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}
