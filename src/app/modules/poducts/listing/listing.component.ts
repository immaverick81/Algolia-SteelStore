import { Component, OnInit, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Options } from 'ng5-slider';

import { EnquirypopUpComponent } from 'src/app/shared/enquirypop-up/enquirypop-up.component';
import { AuthService } from 'src/app/shared/utils/auth.service';

import { ToastrService } from 'ngx-toastr';
import { ProductEnquiryModel } from 'src/app/shared/models/product-enquiry.model';
import { ProductEnquiryService } from 'src/app/shared/services/product-enquiry.service';
import { SigninComponent } from 'src/app/shared/signin/signin.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  public enquiryDetails = {
    email: '',
    coilNumber: '',
    objectID: '',
    productName: '',
  };
  @Input() data: any;

  value: number = 0.009;
  highValue: number = 0.3;
  options: Options = {
    floor: 0.005,
    ceil: 0.501,
  };

  value1: number = 1;
  highValue1: number = 30;
  options1: Options = {
    floor: 1,
    ceil: 80,
  };

  constructor(
    private modalService: NgbModal,
    public router: Router,
    public dialog: MatDialog,
    private _authService: AuthService,
    private toastr: ToastrService,
    private _productEnquiryService: ProductEnquiryService
  ) { }

  getProductId = (objectID) => (objectID ? `TSS${objectID}` : 'NA');

  ngOnInit() {
    console.log(this.data);
  }
  @Input() public xyz;
  @Input() public list: ArrayType;
  // @Input() public gloabalSearchKey;

  openDialogenquiry(product): void {
    if (this._authService.getSessionInfo() == undefined) {
      const dialogRef = this.dialog.open(EnquirypopUpComponent, {
        height: '95vh',
        data: product,
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    } else {
      let enquiryDetails: ProductEnquiryModel = {
        name: this._authService.getSessionInfo().userName,
        email: this._authService.getSessionInfo().email,
        contactNumber: this._authService.getSessionInfo().contactNumber,
        enquireProduct: product.PRODUCT,
        productDetails: 'Coil Number :' + product.COILNUMBER + ' AND objectID: ' + product.objectID
      }
      this._productEnquiryService.submitEnquiry(enquiryDetails).subscribe(result => {
        this.toastr.success('Thanks for your enquiry...', 'Confirmation!');
      });
    }
  }

  makeAnOffer(product) {
    if (this._authService.getSessionInfo() == undefined) {
      const dialogRef = this.dialog.open(SigninComponent, {
        height: '95vh',
        data: product,
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('sign up dailog closed')
      });
    }
    else {
      let enquiryDetails: ProductEnquiryModel = {
        name: this._authService.getSessionInfo().userName,
        email: this._authService.getSessionInfo().email,
        contactNumber: this._authService.getSessionInfo().contactNumber,
        enquireProduct: product.PRODUCT,
        productDetails: 'Coil Number :' + product.COILNUMBER + ' AND objectID: ' + product.objectID + 'AND Offer: Offer Applied'
      }
      this._productEnquiryService.submitEnquiry(enquiryDetails).subscribe(result => {
        this.toastr.success('Thanks for enquiry...', 'Confirmation!');
      });
    }
  }

  navigateToDetails(elements) {
    this.router.navigate(['/steel/details'], {
      queryParams: {
        WIDTH_IN: elements.WIDTH_IN + 1 || 'N/A',
        THICKNESS_IN: elements.THICKNESS_IN + 0.002 || 'N/A',
        LENGTH_IN: elements.LENGTH_IN || 'N/A',
        THICKNESS_MM: elements.THICKNESS_MM || 'N/A',
        WEIGHT_LB: elements.WEIGHT_LB + 1240 || 'N/A',
        VENDOR: elements.VENDOR || 'N/A',
        GRADE: elements.GRADE || 'N/A',
        ROCKWELL: elements.ROCKWELL || 'N/A',
        YIELD: elements.YIELD || 'N/A',
        ELONGATION: elements.ELONGATION || 'N/A',
        TENSILE: elements.TENSILE || 'N/A',
        PASS_OIL: elements['PASS/OIL'] || 'N/A',
        FINISH: elements.FINISH || 'N/A',
        TEMPER: elements.TEMPER || 'N/A',
        COATING: elements.COATING || 'N/A',
        C: elements.C || 'N/A',
        MN: elements.MN || 'N/A',
        P: elements.P || 'N/A',
        S: elements.S || 'N/A',
        SI: elements.SI || 'N/A',
        AL: elements.AL || 'N/A',
        CR: elements.CR || 'N/A',
        NB: elements.NB || 'N/A',
        TI: elements.TI || 'N/A',
        CA: elements.CA || 'N/A',
        N: elements.N || 'N/A',
        NI: elements.NI || 'N/A',
        CU: elements.CU || 'N/A',
        V: elements.V || 'N/A',
        B: elements.B || 'N/A',
        LOCATION: elements.LOCATION || 'N/A',
        TAGNUMBER: elements.TAGNUMBER || 'N/A',
        QUALITY: elements.QUALITY || 'N/A',
        COILNUMBER: elements.COILNUMBER || 'N/A',
        objectID: elements.objectID || 'N/A',
        PRODUCT: elements.PRODUCT || 'N/A'
      }
      , queryParamsHandling: "merge"
    })
  }
}
