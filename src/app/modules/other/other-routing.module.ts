import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { LiteratureComponent } from './literature/literature.component';
import { BlogDetails1Component } from './blogs/blog-details1/blog-details1.component';
import { BlogDetails2Component } from './blogs/blog-details2/blog-details2.component';
import { BlogDetails3Component } from './blogs/blog-details3/blog-details3.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [

  {
    path:'blogs',
    component: BlogsComponent
  }, 
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'literature', 
    component: LiteratureComponent
  },
  {
    path: 'blogs-details-1',
    component: BlogDetails1Component
  }, 
  {
    path: 'blogs-details-2',
    component: BlogDetails2Component
  }, 
  {
    path: 'blogs-details-3',
    component: BlogDetails3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
