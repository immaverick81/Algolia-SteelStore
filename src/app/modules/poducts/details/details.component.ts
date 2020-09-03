import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/utils/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { EnquirypopUpComponent } from 'src/app/shared/enquirypop-up/enquirypop-up.component';
import { ToastrService } from 'ngx-toastr';
import { ProductEnquiryModel } from 'src/app/shared/models/product-enquiry.model';
import { ProductEnquiryService } from 'src/app/shared/services/product-enquiry.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data: any;

  productDescriptionList = {
    hotRoll:
      "Hot rolling is a metalworking process that occurs above the recrystallization temperature of the material. After the grains deform during processing, they recrystallize, which maintains an equiaxed microstructure and prevents the metal from work hardening.",
    galvaneal:
      "Galvannealed or galvanneal (galvannealed steel) is the result from the processes of galvanizing followed by annealing of sheet steel. Galvannealed steel is a matte uniform grey color, which can be easily painted. In comparison to galvanized steel the coating is harder, and more brittle.",
    galvalume:
      "Aluminized steel has slowly started to convert bakery trays which were previously made by galvanized or galvalume steel as it does not contain lead which is poisonous",
    coldRoll: "Cold-formed steel (CFS) is the common term for steel products shaped by cold-working processes carried out near room temperature, such as rolling, pressing, stamping, bending, etc. Stock bars and sheets of cold-rolled steel (CRS) are commonly used in all areas of manufacturing.",
    elctodgal: "Galvanizing is the process of applying a protective zinc coating to steel or iron, to prevent rusting. The most common method is hot-dip galvanizing, in which the parts are submerged in a bath of molten hot zinc. "
  };
  productDescription: string;

  constructor(private activatedRoute: ActivatedRoute, private _authService: AuthService, public dialog: MatDialog, 
    private toastr: ToastrService, private _productEnquiryService: ProductEnquiryService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data = params;
      this.getRollData(this.data.PRODUCT);
    });
  }

  getRollData(key) {
    switch (key.trim()) {
      case "HOT ROLLED":
        this.productDescription = this.productDescriptionList.hotRoll;
        break;
      case "GALVANEAL":
        this.productDescription = this.productDescriptionList.galvaneal;
        break;
      case "GALVALUME":
        this.productDescription = this.productDescriptionList.galvalume;
        break;
      case "COLD ROLLED":
        this.productDescription = this.productDescriptionList.coldRoll;
        break;
      case "ELECTRO GALVANISED":
        this.productDescription = this.productDescriptionList.elctodgal;
      default:
        this.productDescription = this.productDescriptionList.elctodgal;
        break;
    }
  }

  sendEnquiry() {
    if (this._authService.getSessionInfo() == undefined) {
      this.openEnquiryDailog();
    }
    else {
      let enquiryDetails: ProductEnquiryModel = {
        name: this._authService.getSessionInfo().userName,
        email: this._authService.getSessionInfo().email,
        contactNumber: this._authService.getSessionInfo().contactNumber,
        enquireProduct: this.data.PRODUCT,
        productDetails: 'Coil Number :'+this.data.COILNUMBER+' AND objectID: '+ this.data.objectID
      }
      this._productEnquiryService.submitEnquiry(enquiryDetails).subscribe(result => {
        this.toastr.success('Thanks for your enquiry...', 'Confirmation!');
      });
    }
  }

  openEnquiryDailog(): void {
    const dialogRef = this.dialog.open(EnquirypopUpComponent, {
      height: '95vh',
      data: this.data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
