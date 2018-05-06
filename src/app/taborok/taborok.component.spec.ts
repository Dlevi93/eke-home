import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaborokComponent } from './taborok.component';

describe('TaborokComponent', () => {
  let component: TaborokComponent;
  let fixture: ComponentFixture<TaborokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaborokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaborokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
