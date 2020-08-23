import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonlysearchedComponent } from './commonlysearched.component';

describe('CommonlysearchedComponent', () => {
  let component: CommonlysearchedComponent;
  let fixture: ComponentFixture<CommonlysearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonlysearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonlysearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
