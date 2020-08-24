import { Component, OnInit, Inject, forwardRef, ViewEncapsulation } from '@angular/core';

import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';

import { connectClearRefinements } from 'instantsearch.js/es/connectors';

@Component({
	selector: 'app-algolia-clear-filter',
	templateUrl: './algolia-clear-filter.component.html',
	styleUrls: [ './algolia-clear-filter.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class AlgoliaClearFilterComponent extends BaseWidget {
	public state: {
		hasRefinements: boolean;
		refine: Function;
		createURL: Function;
		widgetParams: object;
	};
	constructor(
		@Inject(forwardRef(() => NgAisInstantSearch))
		public instantSearchParent
	) {
		super('ClearRefinements');
	}
	ngOnInit() {
		this.createWidget(
			connectClearRefinements,
			{
				// instance options
			}
		);
		super.ngOnInit();
	}
}
