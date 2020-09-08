import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails2Component } from './blog-details2.component';

describe('BlogDetails2Component', () => {
  let component: BlogDetails2Component;
  let fixture: ComponentFixture<BlogDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
