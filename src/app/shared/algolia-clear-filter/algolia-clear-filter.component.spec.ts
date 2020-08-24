import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoliaClearFilterComponent } from './algolia-clear-filter.component';

describe('AlgoliaClearFilterComponent', () => {
  let component: AlgoliaClearFilterComponent;
  let fixture: ComponentFixture<AlgoliaClearFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoliaClearFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoliaClearFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
