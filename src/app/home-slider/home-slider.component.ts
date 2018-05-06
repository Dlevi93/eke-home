import { Component, OnInit } from '@angular/core';
import { SliderArticle, HomeSliderService } from './service/home-slider.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  providers: [HomeSliderService],
})
export class HomeSliderComponent implements OnInit {
  articles: SliderArticle[];

  constructor(private homeSliderService: HomeSliderService) { }

  ngOnInit() {
    this.homeSliderService.getLatestArticles().subscribe(result => { this.articles = result; });
  }
}
