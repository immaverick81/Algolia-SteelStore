import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<SignupComponent>,
    public dialog: MatDialog, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signUpForm = this._formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      phoneNumber: [],
      password: []
    })
  }

  closedialog(){
    this.dialogRef.close();

  }

  signUp() {
    console.log(this.signUpForm.value);
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
