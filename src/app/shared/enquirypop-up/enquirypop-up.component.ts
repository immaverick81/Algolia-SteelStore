import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enquirypop-up',
  templateUrl: './enquirypop-up.component.html',
  styleUrls: ['./enquirypop-up.component.scss']
})
export class EnquirypopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EnquirypopUpComponent> ) { }

  ngOnInit(): void {
  }
  closedialog(){
    this.dialogRef.close();

  }
}
