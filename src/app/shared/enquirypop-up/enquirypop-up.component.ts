import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryModel } from '../models/enquiry.model';

@Component({
  selector: 'app-enquirypop-up',
  templateUrl: './enquirypop-up.component.html',
  styleUrls: ['./enquirypop-up.component.scss']
})
export class EnquirypopUpComponent implements OnInit {
  enquiryForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EnquirypopUpComponent>, @Inject(MAT_DIALOG_DATA) public selectedProduct, private _formBuilder: FormBuilder ) { }
  
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.enquiryForm = this._formBuilder.group({
      name: [],
      email: [],
      contactNumber: []
    })
  }

  submitEnquiry(){
    let enquiryDetail: EnquiryModel = {
      name: this.enquiryForm.get('name').value,
      email: this.enquiryForm.get('email').value,
      contactNumber: this.enquiryForm.get('contactNumber').value,
      productDetail: this.selectedProduct
    }
    console.log(enquiryDetail)
  }

  closedialog(){
    this.dialogRef.close();
  }
}
