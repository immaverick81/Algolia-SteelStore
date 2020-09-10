import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppRegularExpressionEnum } from '../enums/app-regular-expression.enum';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contactUsForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(AppRegularExpressionEnum.emailRegex)]],
      contactNumber: ['', [Validators.required]],
      reasonOfContact: ['', [Validators.required]]
    })
  }

  submitForm() {
    this.contactUsForm.markAllAsTouched();
    this.toastr.success('Thank you. We will reach you soon');
  }
}
