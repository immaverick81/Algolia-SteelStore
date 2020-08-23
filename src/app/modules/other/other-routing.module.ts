import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { LiteratureComponent } from './literature/literature.component';


const routes: Routes = [

  {
    path:'blogs',
    component: BlogsComponent
  }, 
  {
    path: 'literature', 
    component: LiteratureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
