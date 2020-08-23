import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotrollComponent } from './hotroll.component';

describe('HotrollComponent', () => {
  let component: HotrollComponent;
  let fixture: ComponentFixture<HotrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
