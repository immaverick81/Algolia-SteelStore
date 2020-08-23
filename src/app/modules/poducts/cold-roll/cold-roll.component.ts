import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
@Component({
	selector: 'app-cold-roll',
	templateUrl: './cold-roll.component.html',
	styleUrls: [ './cold-roll.component.scss' ]
})
export class ColdRollComponent implements OnInit {
	constructor() {}
	config = {
		indexName: 'COLD_ROLL',
		searchClient
	};

	public title = {
		title: 'Cold Rolled Steel Suppliers'
	};

	ngOnInit(): void {}
}
