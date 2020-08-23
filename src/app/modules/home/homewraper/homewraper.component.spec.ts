import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewraperComponent } from './homewraper.component';

describe('HomewraperComponent', () => {
  let component: HomewraperComponent;
  let fixture: ComponentFixture<HomewraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomewraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
