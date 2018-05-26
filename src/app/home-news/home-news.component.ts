import { Component, OnInit } from '@angular/core';
import { HomeNewsService, HomeNewsArticle } from './service/home-news.service';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css'],
  providers: [HomeNewsService],
})
export class HomeNewsComponent implements OnInit {
  newsArticles: HomeNewsArticle[];

  constructor(private homeNewsService: HomeNewsService) {
  }

  ngOnInit() {
    this.homeNewsService.getArticles().subscribe(result => { this.newsArticles = result; });
  }

}
