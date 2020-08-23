import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdRollComponent } from './cold-roll.component';

describe('ColdRollComponent', () => {
  let component: ColdRollComponent;
  let fixture: ComponentFixture<ColdRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
