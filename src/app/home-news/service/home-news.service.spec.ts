import { TestBed, inject } from '@angular/core/testing';

import { HomeNewsService } from './home-news.service';

describe('HomeNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeNewsService]
    });
  });

  it('should be created', inject([HomeNewsService], (service: HomeNewsService) => {
    expect(service).toBeTruthy();
  }));
});
