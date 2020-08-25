import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enquirypop-up',
  templateUrl: './enquirypop-up.component.html',
  styleUrls: ['./enquirypop-up.component.scss']
})
export class EnquirypopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EnquirypopUpComponent>, @Inject(MAT_DIALOG_DATA) public selectedProduct ) { }
  ngOnInit(): void {
  }
  closedialog(){
    this.dialogRef.close();

  }
}
