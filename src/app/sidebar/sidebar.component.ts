import { Component, OnInit } from '@angular/core';

import { SidebarService, Events, WeatherResponse } from './service/sidebar.service';
import { AppService } from '../app/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SidebarService, AppService],
})
export class SidebarComponent implements OnInit {
  events: Events[];
  weather: WeatherResponse[];

  constructor(private sidebarService: SidebarService, private appService: AppService) { }

  ngOnInit() {
    this.sidebarService.getEvents().subscribe(result => { this.events = result; this.appService.latestEventListIsLoaded(); });
    this.sidebarService.getWeatherForecast().subscribe(result => { this.weather = result; });
  }

}
