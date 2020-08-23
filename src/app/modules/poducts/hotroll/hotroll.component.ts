import { Component, OnInit } from '@angular/core';

import algoliasearch from 'algoliasearch/lite';

import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
@Component({
	selector: 'app-hotroll',
	templateUrl: './hotroll.component.html',
	styleUrls: [ './hotroll.component.scss' ]
})
export class HotrollComponent implements OnInit {
	constructor() {}
	config = {
		indexName: 'HOT_ROLL',
		searchClient
	};

	public title = {
		title: 'Hot Rolled Steel Store & Supplier'
	};
	ngOnInit(): void {}
}
