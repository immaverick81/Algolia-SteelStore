import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

// tslint:disable-next-line:ban-types
declare let ga: Function;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	title = 'exos';
	constructor(public router: Router) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				ga('set', event.urlAfterRedirects);
				ga('send', 'pageview');
			}
		});
	}

	ngOnInit() {
		AOS.init({
			easing: 'ease-in-sine',
			delay: 100
		});
	}
}
