import { Component, OnInit } from '@angular/core';
import { NewsbarService } from './service/newsbar.service';
import { Events } from '../sidebar/service/sidebar.service';

@Component({
  selector: 'app-newsbar',
  templateUrl: './newsbar.component.html',
  styleUrls: ['./newsbar.component.css'],
  providers: [NewsbarService],
})
export class NewsbarComponent implements OnInit {
  elements: Events[];

  constructor(private newsbarService: NewsbarService) { }

  ngOnInit() {
    this.newsbarService.getLatestElements().subscribe(result => { this.elements = result; });
  }
}
