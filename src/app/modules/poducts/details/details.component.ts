import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/utils/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { EnquirypopUpComponent } from 'src/app/shared/enquirypop-up/enquirypop-up.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data: any;

  public enquiryDetails = {
    email: "",
    coilNumber: "",
    objectID: "",
    productName: ""
  };

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

  constructor(private activatedRoute: ActivatedRoute, private _authService: AuthService, public dialog: MatDialog) { }

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
      this.enquiryDetails.email = this._authService.getSessionInfo().emil;
      this.enquiryDetails.coilNumber = this.data.COILNUMBER;
      this.enquiryDetails.objectID = this.data.OBJECTID;
      this.enquiryDetails.productName = this.data.PRODUCT;
      console.log(this.enquiryDetails);
    }
  }

  openEnquiryDailog(): void {
    const dialogRef = this.dialog.open(EnquirypopUpComponent, {
      height: '95vh',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
