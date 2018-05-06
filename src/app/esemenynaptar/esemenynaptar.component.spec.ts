import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenynaptarComponent } from './esemenynaptar.component';

describe('EsemenynaptarComponent', () => {
  let component: EsemenynaptarComponent;
  let fixture: ComponentFixture<EsemenynaptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsemenynaptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsemenynaptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
