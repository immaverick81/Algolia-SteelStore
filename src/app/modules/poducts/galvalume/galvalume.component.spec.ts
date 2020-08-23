import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalvalumeComponent } from './galvalume.component';

describe('GalvalumeComponent', () => {
  let component: GalvalumeComponent;
  let fixture: ComponentFixture<GalvalumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalvalumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalvalumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
