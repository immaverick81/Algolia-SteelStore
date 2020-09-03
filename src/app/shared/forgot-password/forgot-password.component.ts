import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRegularExpressionEnum } from '../enums/app-regular-expression.enum';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(AppRegularExpressionEnum.emailRegex)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  isConfirmPasswordValid(): boolean {
		if(this.forgotPasswordForm.get('password').value) {
			if(this.forgotPasswordForm.get('password').value == this.forgotPasswordForm.get('confirmPassword').value) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return true;
		}
  }
  
  updatePassword() {
    this.forgotPasswordForm.markAllAsTouched();
  }

}
