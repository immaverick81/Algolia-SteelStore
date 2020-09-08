import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FileUploadComponent>) { 
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  closedialog() {
		this.dialogRef.close();
	}
}
