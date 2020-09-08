import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetails3Component } from './blog-details3.component';

describe('BlogDetails3Component', () => {
  let component: BlogDetails3Component;
  let fixture: ComponentFixture<BlogDetails3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetails3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
