import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../utils/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SigninComponent>, private _formBuilder: FormBuilder, private _authService: AuthService){ }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.signInForm = this._formBuilder.group({
      email: [],
      password: []
    })
  }

  signIn() {
    console.log(this.signInForm.value);
    let obj = {
      name: this.signInForm.get('email').value,
      token: 'abcdedfg'
    }
    this._authService.setSessionInfo(obj);
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
