import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService, Article } from './service/article.service';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  article: Article;
  images: any[];
  fontSize = 16;
  slug: string;

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService,
    private fb: FacebookService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.images = [];
    this.articleService.getArticleBySlug(this.slug).subscribe(result => {
      this.article = result;
      this.article.mediaElements.forEach(image => {
        this.images.push({ source: image.name });
      });
    });

    const initParams: InitParams = {
      appId: '1915861481986606',
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(initParams);
  }

  fontSizeChange($val: number) {
    this.fontSize += $val;
  }

  share() {
    const params: UIParams = {
      href: 'http://eke.ro/article/' + this.slug,
      method: 'share',
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
