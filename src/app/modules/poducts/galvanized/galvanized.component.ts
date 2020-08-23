import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);

@Component({
	selector: 'app-galvanized',
	templateUrl: './galvanized.component.html',
	styleUrls: [ './galvanized.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class GalvanizedComponent implements OnInit {
	public state: {
		pages: number[];
		currentRefinement: number;
		nbHits: number;
		nbPages: number;
		isFirstPage: boolean;
		isLastPage: boolean;
		refine: any;
		createURL: any;
		widgetParams: any;
	};
	config = {
		indexName: 'GALVANIZED',
		searchClient
	};

	public title = {
		title: 'Galvanized Steel Suppliers'
	};
	constructor() {}

	ngOnInit(): void {}
}
