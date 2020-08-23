import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrogalvanizedComponent } from './electrogalvanized.component';

describe('ElectrogalvanizedComponent', () => {
  let component: ElectrogalvanizedComponent;
  let fixture: ComponentFixture<ElectrogalvanizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrogalvanizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrogalvanizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
