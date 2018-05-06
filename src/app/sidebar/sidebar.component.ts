import { Component, OnInit } from '@angular/core';

import { SidebarService, Events, WeatherResponse } from './service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [SidebarService],
})
export class SidebarComponent implements OnInit {
  events: Events[];
  weather: WeatherResponse[];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.getEvents().subscribe(result => { this.events = result; });
    this.sidebarService.getWeatherForecast().subscribe(result => { this.weather = result; });
  }

}
