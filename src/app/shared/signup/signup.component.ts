import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupComponent>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closedialog(){
    this.dialogRef.close();

  }
  openDialogsignup(): void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '600px',
      height: '95vh',
      data: {
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  opensignin(){
    this.closedialog();
    this.openDialogsignup()
  }
}
