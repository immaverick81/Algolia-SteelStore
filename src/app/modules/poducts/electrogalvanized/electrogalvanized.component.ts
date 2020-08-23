import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
@Component({
	selector: 'app-electrogalvanized',
	templateUrl: './electrogalvanized.component.html',
	styleUrls: [ './electrogalvanized.component.scss' ]
})
export class ElectrogalvanizedComponent implements OnInit {
	constructor() {}
	config = {
		indexName: 'ELECTRO_GALVANIZED',
		searchClient
	};

	public title = {
		title: 'Electro Galvanized Steel'
	};

	ngOnInit(): void {}
}
