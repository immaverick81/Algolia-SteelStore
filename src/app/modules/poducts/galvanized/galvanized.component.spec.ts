import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalvanizedComponent } from './galvanized.component';

describe('GalvanizedComponent', () => {
  let component: GalvanizedComponent;
  let fixture: ComponentFixture<GalvanizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalvanizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalvanizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
