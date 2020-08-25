import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirypopUpComponent } from './enquirypop-up.component';

describe('EnquirypopUpComponent', () => {
  let component: EnquirypopUpComponent;
  let fixture: ComponentFixture<EnquirypopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirypopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirypopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
