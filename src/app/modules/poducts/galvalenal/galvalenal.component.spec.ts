import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalvalenalComponent } from './galvalenal.component';

describe('GalvalenalComponent', () => {
  let component: GalvalenalComponent;
  let fixture: ComponentFixture<GalvalenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalvalenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalvalenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
