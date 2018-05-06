import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsbarComponent } from './newsbar.component';

describe('NewsbarComponent', () => {
  let component: NewsbarComponent;
  let fixture: ComponentFixture<NewsbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
