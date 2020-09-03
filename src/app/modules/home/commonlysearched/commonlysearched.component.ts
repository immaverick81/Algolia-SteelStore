import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/utils/auth.service';
import { EnquirypopUpComponent } from 'src/app/shared/enquirypop-up/enquirypop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commonlysearched',
  templateUrl: './commonlysearched.component.html',
  styleUrls: ['./commonlysearched.component.scss']
})
export class CommonlysearchedComponent implements OnInit {

  constructor(

    private _authService: AuthService,
    public dialog: MatDialog,
    private toastr: ToastrService



  ) { }

  ngOnInit(): void {
  }
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
      this.toastr.success('Thanks for your enquiry...', 'Confirmation!');
    }
  }

  commonsearched = [
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },   {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
  ]
 

}
