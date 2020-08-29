import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from './../services/login.service';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from '../utils/auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: [ './signin.component.scss' ]
})
export class SigninComponent implements OnInit {
	signInForm: FormGroup;
  emailRegex = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

	constructor(
		public dialogRef: MatDialogRef<SigninComponent>,
		private _formBuilder: FormBuilder,
		private _authService: AuthService,
		private loginService: LoginService,
    private toasterService: ToastrService,
    public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.createForm();
	}

	createForm() {
		this.signInForm = this._formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
			password: ['',[Validators.required]]
		});
	}

	signIn() {
    this.signInForm.markAllAsTouched();
    if(this.signInForm.valid) {
      this.loginService.login(this.signInForm.get('email').value, this.signInForm.get('password').value).subscribe(
        (data) => {
          console.log(data);
          let obj = {
            email: data.data.email,
            username: data.data.username,
            token: data.data.token
          };
          this._authService.setSessionInfo(obj);
          this.closedialog();
          this.toasterService.success('Login successful');
        },
        (error) => {
          this.toasterService.error('Login failed');
        },
        () => {
          this.toasterService.clear();
        }
      );
    }
	}

	closedialog() {
		this.dialogRef.close();
	}

	opensignup() {
		this.closedialog();
		this.openDialogSignUp();
  }
  
  openDialogSignUp(): void {
		const dialogRef = this.dialog.open(SignupComponent, {
			width: '600px',
			height: '95vh',
			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}
