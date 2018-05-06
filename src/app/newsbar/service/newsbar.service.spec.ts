import { TestBed, inject } from '@angular/core/testing';

import { NewsbarService } from './newsbar.service';

describe('SidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsbarService]
    });
  });

  it('should be created', inject([NewsbarService], (service: NewsbarService) => {
    expect(service).toBeTruthy();
  }));
});
