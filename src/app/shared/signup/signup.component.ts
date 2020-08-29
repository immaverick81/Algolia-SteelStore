import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from './../services/login.service';
import { SigninComponent } from '../signin/signin.component';
import { AuthService } from '../utils/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
	signUpForm: FormGroup;
	constructor(
		public dialogRef: MatDialogRef<SignupComponent>,
		public dialog: MatDialog,
		private _formBuilder: FormBuilder,
		private loginService: LoginService,
		private _authService: AuthService,
		private toasterService: ToastrService
	) {}

	ngOnInit(): void {
		this.createForm();
	}

	createForm() {
		this.signUpForm = this._formBuilder.group({
			firstName: [],
			lastName: [],
			email: [],
			username: [],
			phoneNumber: [],
			password: []
		});
	}

	closedialog() {
		this.dialogRef.close();
	}

	signUp() {
		console.log(this.signUpForm.value);
		this.loginService
			.signup(
				this.signUpForm.get('firstName').value,
				this.signUpForm.get('lastName').value,
				this.signUpForm.get('email').value,
				this.signUpForm.get('password').value,
				this.signUpForm.get('phoneNumber').value,
				this.signUpForm.get('password').value
			)
			.subscribe(
				(data) => {
					console.log(data);
					let obj = {
						email: data.data.email,
						username: data.data.username,
						token: data.data.token
					};
					this._authService.setSessionInfo(obj);
					this.toasterService.success('Signup successful');
				},
				(error) => {
					this.toasterService.error('Signup failed');
				},
				() => {
					this.toasterService.clear();
				}
			);
		this.closedialog();
	}

	openDialogsignup(): void {
		const dialogRef = this.dialog.open(SigninComponent, {
			width: '600px',
			height: '95vh',
			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
	opensignin() {
		this.closedialog();
		this.openDialogsignup();
	}
}
