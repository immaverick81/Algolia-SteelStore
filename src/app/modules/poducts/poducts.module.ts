import { AlgoliaClearFilterComponent } from './../../shared/algolia-clear-filter/algolia-clear-filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgAisModule, NgAisInstantSearch } from 'angular-instantsearch';

import { SharedModule } from 'src/app/shared/shared.module';

import { Ng5SliderModule } from 'ng5-slider';

import { MenuSelectComponent } from 'src/app/shared/algolia-menu-select/algolia-menu-select.component';
import { AlgoliaToggleComponent } from 'src/app/shared/algolia-toggle/algolia-toggle.component';

import { AlgoliaRangeComponent } from './../../shared/algolia-range/algolia-range.component';

import { PoductsRoutingModule } from './poducts-routing.module';

import { ColdRollComponent } from './cold-roll/cold-roll.component';
import { DetailsComponent } from './details/details.component';
import { ElectrogalvanizedComponent } from './electrogalvanized/electrogalvanized.component';
import { GalvalenalComponent } from './galvalenal/galvalenal.component';
import { GalvalumeComponent } from './galvalume/galvalume.component';
import { GalvanizedComponent } from './galvanized/galvanized.component';
import { HotrollComponent } from './hotroll/hotroll.component';
import { ListingComponent } from './listing/listing.component';
import { ProductfiltersComponent } from './productfilters/productfilters.component';
import { ProductmainwraaperComponent } from './productmainwraaper/productmainwraaper.component';

@NgModule({
	declarations: [
		ProductmainwraaperComponent,
		GalvanizedComponent,
		GalvalumeComponent,
		HotrollComponent,
		ColdRollComponent,
		ElectrogalvanizedComponent,
		GalvalenalComponent,
		ProductfiltersComponent,
		DetailsComponent,
		AlgoliaRangeComponent,
		ListingComponent,
		MenuSelectComponent,
		AlgoliaToggleComponent,
		AlgoliaClearFilterComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PoductsRoutingModule,
		NgbModule,
		MatTabsModule,
		Ng5SliderModule,
		MatExpansionModule,
		NgAisModule,
		MatCheckboxModule
	],
	providers: [ NgAisInstantSearch ]
})
export class PoductsModule {}
