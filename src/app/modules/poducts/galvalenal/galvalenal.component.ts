import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
@Component({
	selector: 'app-galvalenal',
	templateUrl: './galvalenal.component.html',
	styleUrls: [ './galvalenal.component.scss' ]
})
export class GalvalenalComponent implements OnInit {
	constructor() {}
	config = {
		indexName: 'GALVANEAL',
		searchClient
	};

	public title = {
		title: 'Galvaneal Steel & Material'
	};

	ngOnInit(): void {}
}
