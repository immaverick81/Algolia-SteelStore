import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductEnquiryModel } from '../models/product-enquiry.model';
import { AppRegularExpressionEnum } from '../enums/app-regular-expression.enum';
import { ToastrService } from 'ngx-toastr';
import { ProductEnquiryService } from '../services/product-enquiry.service';

@Component({
  selector: 'app-enquirypop-up',
  templateUrl: './enquirypop-up.component.html',
  styleUrls: ['./enquirypop-up.component.scss']
})
export class EnquirypopUpComponent implements OnInit {
  enquiryForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EnquirypopUpComponent>, @Inject(MAT_DIALOG_DATA) public selectedProduct, 
  private _formBuilder: FormBuilder, private toastr: ToastrService, private _productEnquiryService: ProductEnquiryService ) { 
    dialogRef.disableClose = true;
  }
  
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.enquiryForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(AppRegularExpressionEnum.emailRegex)]],
      contactNumber: ['', [Validators.required]]
    })
  }

  submitEnquiry(){
    this.enquiryForm.markAllAsTouched();
    if(this.enquiryForm.valid) {
      console.log(this.selectedProduct)
      let enquiryDetails: ProductEnquiryModel = {
        name: this.enquiryForm.get('name').value,
        email : this.enquiryForm.get('email').value,
        contactNumber: this.enquiryForm.get('contactNumber').value,
        enquireProduct: this.selectedProduct.PRODUCT,
        productDetails: 'Coil Number :'+this.selectedProduct.COILNUMBER+' AND objectID: '+ this.selectedProduct.objectID
      }
      this._productEnquiryService.submitEnquiry(enquiryDetails).subscribe(result => {
        this.closedialog();
        this.toastr.success('Thanks for your enquiry...', 'Confirmation!');
      });
    }
    
  }

  closedialog() {
    this.dialogRef.close();
  }
}
