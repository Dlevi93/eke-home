import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElerhetosegekComponent } from './elerhetosegek.component';

describe('ElerhetosegekComponent', () => {
  let component: ElerhetosegekComponent;
  let fixture: ComponentFixture<ElerhetosegekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElerhetosegekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElerhetosegekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
