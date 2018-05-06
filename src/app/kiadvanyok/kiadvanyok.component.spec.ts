import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiadvanyokComponent } from './kiadvanyok.component';

describe('KiadvanyokComponent', () => {
  let component: KiadvanyokComponent;
  let fixture: ComponentFixture<KiadvanyokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiadvanyokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiadvanyokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
