import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCampComponent } from './home-camp.component';

describe('HomeCampComponent', () => {
  let component: HomeCampComponent;
  let fixture: ComponentFixture<HomeCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
