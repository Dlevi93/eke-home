import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app/app.settings';

@Injectable()
export class SidebarService {
  _http: HttpClient;
  events: Events[];
  weather: WeatherResponse[];

  constructor(http: HttpClient) {
    this._http = http;
    console.log('Sidebar event service loaded');
  }

  getEvents(): Observable<Events[]> {
    return this._http.get(AppSettings.API_ENDPOINT + '/FutureEventList').map((data: Events[]) => {
      this.events = data;
      return data;
    });
  }

  getWeatherForecast(): Observable<WeatherResponse[]> {
    return this._http.get(AppSettings.API_ENDPOINT + '/WeatherForecast').map((data: WeatherResponse[]) => {
      this.weather = data;
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

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
}

export interface WeatherResponse {
  weather: Array<Weather>[];
  base: string;
  main: Main;
  dt: number;
  id: number;
  name: string;
  cod: number;
}
