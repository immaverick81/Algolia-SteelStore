import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomewraperComponent } from './homewraper/homewraper.component';


const routes: Routes = [

  {
    path: '',
    component: HomewraperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
