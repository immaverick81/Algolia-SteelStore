import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { LiteratureComponent } from './literature/literature.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BlogDetails1Component } from './blogs/blog-details1/blog-details1.component';
import { BlogDetails2Component } from './blogs/blog-details2/blog-details2.component';
import { BlogDetails3Component } from './blogs/blog-details3/blog-details3.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [BlogsComponent, LiteratureComponent, BlogDetails1Component, BlogDetails2Component, BlogDetails3Component, TermsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
