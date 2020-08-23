import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienttestimonialComponent } from './clienttestimonial.component';

describe('ClienttestimonialComponent', () => {
  let component: ClienttestimonialComponent;
  let fixture: ComponentFixture<ClienttestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienttestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienttestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
