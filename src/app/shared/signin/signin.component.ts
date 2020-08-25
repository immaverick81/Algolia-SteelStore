import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SigninComponent>,
    )
   { }

  ngOnInit(): void {
  }
  closedialog(){
    this.dialogRef.close();

  }
  // openDialogsignup(): void {
  //   const dialogRef = this.dialog.open(SignupComponent, {
  //     width: '600px',
  //     height: '95vh',
  //     data: {
        
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  opensignup(){
    this.closedialog();
    // this.openDialogsignup();
    
  }
}
