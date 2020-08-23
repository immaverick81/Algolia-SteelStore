import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfiltersComponent } from './productfilters.component';

describe('ProductfiltersComponent', () => {
  let component: ProductfiltersComponent;
  let fixture: ComponentFixture<ProductfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
