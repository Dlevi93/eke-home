import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProspectsComponent } from './home-prospects.component';

describe('HomeProspectsComponent', () => {
  let component: HomeProspectsComponent;
  let fixture: ComponentFixture<HomeProspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
