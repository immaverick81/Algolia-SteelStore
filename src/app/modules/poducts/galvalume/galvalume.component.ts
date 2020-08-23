import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(environment.algolia.appId, environment.algolia.apiKey);
@Component({
	selector: 'app-galvalume',
	templateUrl: './galvalume.component.html',
	styleUrls: [ './galvalume.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class GalvalumeComponent implements OnInit {
	constructor() {}

	config = {
		indexName: 'GALVALUME',
		searchClient
	};

	public title = {
		title: 'Galvalume Steel & Material'
	};

	ngOnInit(): void {}
}
