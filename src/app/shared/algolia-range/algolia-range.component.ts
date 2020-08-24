import { Component, OnInit, Inject, forwardRef, Input } from '@angular/core';

import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';

import { connectRange } from 'instantsearch.js/es/connectors';

import { ChangeContext, Options } from 'ng5-slider';

import { environment } from 'src/environments/environment';
@Component({
	selector: 'app-algolia-range',
	templateUrl: './algolia-range.component.html',
	styleUrls: [ './algolia-range.component.scss' ]
})
export class AlgoliaRangeComponent extends BaseWidget {
	@Input() attributeType: string;
	public state: {
		start: number[];
		range: any;
		refine: any;
		widgetParams: object;
	};

	value: number = 40;
	highValue: number = 60;
	options: Options = {
		floor: 0,
		ceil: 100
	};

	constructor(
		@Inject(forwardRef(() => NgAisInstantSearch))
		public instantSearchParent
	) {
		super('RangeInput');
	}

	ngOnInit() {
		this.createWidget(connectRange, {
			// instance options
			attribute: this.attributeType,
			precision: 4
		});
		super.ngOnInit();
	}
}
