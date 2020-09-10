import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: false,
		autoplay: true,
		navSpeed: 200,
		navText: ['', ''],
		responsive: {
		  0: {
			items: 1
		  },
		  400: {
			items: 2
		  },
		  740: {
			items: 3
		  },
		  940: {
			items: 5
		  }
		},
		nav: true
	  }
}
