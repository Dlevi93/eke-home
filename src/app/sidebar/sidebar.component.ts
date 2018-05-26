import { Component, OnInit, OnDestroy } from '@angular/core';

import { SidebarService, Events, WeatherResponse } from './service/sidebar.service';
import { AppService } from '../app/services/app.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SidebarService, AppService],
})
export class SidebarComponent implements OnInit, OnDestroy {
  events: Events[];
  weather: WeatherResponse[];

  constructor(private sidebarService: SidebarService, private appService: AppService) { }

  ngOnInit() {
    this.sidebarService.getEvents().subscribe(result => { this.events = result, this.appService.state = true; }, err => console.log(err));
    this.sidebarService.getWeatherForecast().subscribe(result => { this.weather = result; });
  }

  ngOnDestroy(): void {
    this.sidebarService.getEvents().subscribe().unsubscribe();
    this.sidebarService.getWeatherForecast().subscribe().unsubscribe();
  }
}
