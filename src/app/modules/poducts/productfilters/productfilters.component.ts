import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BaseWidget, Widget, Connector } from 'angular-instantsearch';

import { Options } from 'ng5-slider';

import algoliasearch from 'algoliasearch/lite';

import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);

@Component({
	selector: 'app-productfilters',
	templateUrl: './productfilters.component.html',
	styleUrls: [ './productfilters.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class ProductfiltersComponent implements OnInit, BaseWidget {
	morefilter = false;
	config = {
		indexName: 'GALVALUME',
		searchClient
	};
	constructor() {}
	instantSearchParent: any;
	autoHideContainer?: boolean;
	widget?: Widget;
	state?: object;
	cx: Function;

	createWidget(connector: Connector, options?: object): void {
		// throw new Error('Method not implemented.');
	}
	ngOnDestroy(): void {
		// throw new Error('Method not implemented.');
	}

	updateState: (state: {}, isFirstRendering: boolean) => void | Promise<void>;
	getItemClass(item: { isRefined?: boolean }) {
		// throw new Error('Method not implemented.');
	}

	value: number = 40;
	highValue: number = 60;
	options: Options = {
		floor: 0,
		ceil: 100
	};
	ngOnInit(): void {}

	showmorefilters() {
		this.morefilter = true;
	}
	lessfilters() {
		this.morefilter = false;
	}
}
