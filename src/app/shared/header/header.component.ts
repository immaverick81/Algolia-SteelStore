import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from './../signup/signup.component';
import { AuthService } from '../utils/auth.service';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	constructor(private router: Router, public dialog: MatDialog, private _authService: AuthService) {}

	ngOnInit(): void {}

	isLoggedIn(): boolean {
		if (this._authService.getSessionInfo() == undefined) {
			return false;
		} else {
			return true;
		}
	}

	getUserName(): string {
		if (this._authService.getSessionInfo().userName != undefined) {
			return 'Hello, ' + this._authService.getSessionInfo().userName;
		} else {
			return '';
		}
	}

	isnotHomeRoute() {
		return this.router.url !== '/';
	}

	isHomeRoute() {
		return this.router.url === '/';
	}

	openDialogsignin() {
		const dialogRef = this.dialog.open(SigninComponent, {
			height: '95vh',

			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	openDialogsignup() {
		const dialogRef = this.dialog.open(SignupComponent, {
			height: '95vh',

			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	signOut() {
		this._authService.removeSession();
	}

	openDialogFileUpload() {
		const dialogRef = this.dialog.open(FileUploadComponent, {
			height: '93vh',
			width: '600px',
			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}
