import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-clienttestimonial',
	templateUrl: './clienttestimonial.component.html',
	styleUrls: [ './clienttestimonial.component.scss' ]
})
export class ClienttestimonialComponent implements OnInit {
	showdiv1 = false;
	showdiv2 = false;
	showdiv3 = false;

	showdiv4 = false;

	constructor() {}

	ngOnInit(): void {
		this.showcontent1();
	}
	showcontent1() {
		this.showdiv1 = true;
		this.showdiv2 = false;
		this.showdiv3 = false;
		this.showdiv4 = false;
	}
	showcontent2() {
		this.showdiv1 = false;
		this.showdiv2 = true;
		this.showdiv3 = false;
		this.showdiv4 = false;
	}
	showcontent3() {
		this.showdiv1 = false;
		this.showdiv2 = false;
		this.showdiv3 = true;
		this.showdiv4 = false;
	}
	showcontent4() {
		this.showdiv1 = false;
		this.showdiv2 = false;
		this.showdiv3 = false;
		this.showdiv4 = true;
	}
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: false,
		dots: false,
		autoplay: true,

		navSpeed: 100,
		navText: [ '', '' ],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			740: {
				items: 2
			},
			940: {
				items: 2
			}
		},
		nav: true
	};
}
