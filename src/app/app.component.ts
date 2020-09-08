import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from "rxjs/operators";

import * as AOS from 'aos';

declare var gtag;

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
		const navEndEvent$ = router.events.pipe(
			filter((e) => e instanceof NavigationEnd)
		  );
		  navEndEvent$.subscribe((e: NavigationEnd) => {
			gtag("config", "UA-176823165-1", { page_path: e.urlAfterRedirects });
		  });
	}

	ngOnInit() {
		AOS.init({
			easing: 'ease-in-sine',
			delay: 100
		});
	}
}
