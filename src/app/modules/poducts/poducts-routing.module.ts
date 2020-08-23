import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColdRollComponent } from './cold-roll/cold-roll.component';
import { DetailsComponent } from './details/details.component';
import { ElectrogalvanizedComponent } from './electrogalvanized/electrogalvanized.component';
import { GalvalenalComponent } from './galvalenal/galvalenal.component';
import { GalvalumeComponent } from './galvalume/galvalume.component';
import { GalvanizedComponent } from './galvanized/galvanized.component';
import { HotrollComponent } from './hotroll/hotroll.component';
import { ProductmainwraaperComponent } from './productmainwraaper/productmainwraaper.component';

const routes: Routes = [
	{
		path: '',
		component: ProductmainwraaperComponent,
		children: [
			{
				path: 'galvanized',
				component: GalvanizedComponent
			},
			{
				path: '',
				redirectTo: 'galvanized',
				pathMatch: 'full'
			},
			{
				path: 'galvalume',
				component: GalvalumeComponent
			},
			{
				path: 'galvaneneal',
				component: GalvalenalComponent
			},
			{
				path: 'hot-roll',
				component: HotrollComponent
			},
			{
				path: 'cold-roll',
				component: ColdRollComponent
			},
			{
				path: 'electro-galvanized',
				component: ElectrogalvanizedComponent
			}
		]
	},
	{
		path: 'details',
		component: DetailsComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PoductsRoutingModule {}
