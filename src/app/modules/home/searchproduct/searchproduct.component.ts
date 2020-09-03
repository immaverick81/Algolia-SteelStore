import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-searchproduct',
	templateUrl: './searchproduct.component.html',
	styleUrls: [ './searchproduct.component.scss' ]
})
export class SearchproductComponent implements OnInit {
	constructor(public router: Router) {}
	selectedCategory: string;
	ngOnInit(): void {}

	goToProductsPage() {
		this.router.navigate([ `/steel/${this.selectedCategory}` ]);
	}

	navigateToProduct(productName: string) {
		this.router.navigate([ `/steel/${productName}` ]);
	}
}
