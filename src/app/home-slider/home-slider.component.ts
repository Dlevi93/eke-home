import { Component, OnInit } from '@angular/core';
import { SliderArticle, HomeSliderService } from './service/home-slider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  providers: [HomeSliderService],
})
export class HomeSliderComponent implements OnInit {
  articles: SliderArticle[];
  images: any[];

  constructor(private homeSliderService: HomeSliderService, private router: Router) { }

  ngOnInit() {
    this.homeSliderService.getLatestArticles().subscribe(result => {
      this.images = [];
      this.articles = result;
      result.slice(0, 6).forEach(element => {
        // tslint:disable-next-line:max-line-length
        this.images.push({ source: element.mediaElements[0].name, title: element.title, slug: element.slug });
      });
    });
  }

  getArticle(article: any) {
    this.router.navigate(['/article', article.slug]);
  }
}
