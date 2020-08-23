import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhychoseusComponent } from './whychoseus.component';

describe('WhychoseusComponent', () => {
  let component: WhychoseusComponent;
  let fixture: ComponentFixture<WhychoseusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhychoseusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhychoseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
