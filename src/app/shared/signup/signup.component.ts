import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
	isFormSubmitted: boolean = false;
	emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

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
			firstName: [''],
			lastName: [''],
			email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
			phoneNumber: ['', [Validators.required]],
			password: ['', [Validators.required]]
		});
	}

	signUp() {
		this.isFormSubmitted = true;
		this.signUpForm.markAllAsTouched();
		if(this.signUpForm.valid) {
			this.loginService
			.signup(
				this.signUpForm.get('email').value,
				this.signUpForm.get('password').value,
				this.signUpForm.get('email').value,
				this.signUpForm.get('firstName').value,
				this.signUpForm.get('lastName').value,
				this.signUpForm.get('phoneNumber').value
			)
			.subscribe(
				(data) => {
					this.loginService.login(this.signUpForm.get('email').value, this.signUpForm.get('password').value).subscribe(result => {
						this.isFormSubmitted = false;
						this.signUpForm.reset();
						let obj = {
							email: result.data.email,
							username: result.data.username,
							token: result.data.token
						};
						this._authService.setSessionInfo(obj);
						this.toasterService.success('Signup successful');
					});
				},
				(error) => {
					this.isFormSubmitted = false;
					this.toasterService.error('Signup failed');
				},
				() => {
					this.toasterService.clear();
				}
			);
		this.closedialog();
		}
	}

	closedialog() {
		this.dialogRef.close();
	}

	isControlIsInValid(controlName: string){
		if(this.signUpForm.get(controlName).touched && this.signUpForm.get(controlName).invalid) {
			return true;
		}
		else {
			return false;
		}
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
