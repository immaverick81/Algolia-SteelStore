import { Component, Inject, forwardRef, Input, ViewEncapsulation } from '@angular/core';

import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';

import { connectRefinementList } from 'instantsearch.js/es/connectors';

@Component({
	selector: 'app-algolia-toggle',
	templateUrl: './algolia-toggle.component.html',
	styleUrls: [ './algolia-toggle.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class AlgoliaToggleComponent extends BaseWidget {
	@Input() attributeType: string;
	public state: {
		items: object[];
		refine: Function;
		createURL: Function;
		isFromSearch: boolean;
		searchForItems: Function;
		isShowingMore: boolean;
		canToggleShowMore: boolean;
		toggleShowMore: Function;
		widgetParams: object;
	};
	constructor(
		@Inject(forwardRef(() => NgAisInstantSearch))
		public instantSearchParent
	) {
		super('RefinementList');
	}
	ngOnInit() {
		this.createWidget(connectRefinementList, {
			// instance options
			attribute: this.attributeType,
			sortBy: [ 'isRefined', 'name:asc' ]
		});
		super.ngOnInit();
	}
}
