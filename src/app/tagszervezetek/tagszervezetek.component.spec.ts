import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagszervezetekComponent } from './tagszervezetek.component';

describe('TagszervezetekComponent', () => {
  let component: TagszervezetekComponent;
  let fixture: ComponentFixture<TagszervezetekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagszervezetekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagszervezetekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
