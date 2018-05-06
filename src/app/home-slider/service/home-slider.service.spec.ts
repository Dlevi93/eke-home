import { TestBed, inject } from '@angular/core/testing';

import { HomeSliderService } from './home-slider.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeSliderService]
    });
  });

  it('should be created', inject([HomeSliderService], (service: HomeSliderService) => {
    expect(service).toBeTruthy();
  }));
});
