import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { LiteratureComponent } from './literature/literature.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [BlogsComponent, LiteratureComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
