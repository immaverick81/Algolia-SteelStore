import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from './../signup/signup.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	constructor(private router: Router, public dialog: MatDialog) {}

	ngOnInit(): void {}

	isnotHomeRoute() {
		return this.router.url !== '/';
	}
	isHomeRoute() {
		return this.router.url === '/';
	}

	openSignInPopup() {
		const dialogRef = this.dialog.open(SigninComponent, {
			height: '95vh',

			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	openSignUpPopup() {
		const dialogRef = this.dialog.open(SignupComponent, {
			height: '95vh',

			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}
