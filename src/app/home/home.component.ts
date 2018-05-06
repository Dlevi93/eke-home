import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  events: any[];
  headerConfig: any;
  iconsConfig: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,listMonth,listYear',
    };

    this.homeService.getEvents().subscribe(result => { this.events = result; });
  }
}
