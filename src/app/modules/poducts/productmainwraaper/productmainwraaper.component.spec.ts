import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmainwraaperComponent } from './productmainwraaper.component';

describe('ProductmainwraaperComponent', () => {
  let component: ProductmainwraaperComponent;
  let fixture: ComponentFixture<ProductmainwraaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmainwraaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmainwraaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
