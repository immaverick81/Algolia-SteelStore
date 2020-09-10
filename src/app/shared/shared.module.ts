import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';

import { SharedRoutingModule } from './shared-routing.module';

import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EnquirypopUpComponent } from './enquirypop-up/enquirypop-up.component';
import { FaqComponent } from './faq/faq.component';
import { FoterComponent } from './foter/foter.component';
import { HeaderComponent } from './header/header.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
	declarations: [
		HeaderComponent,
		FoterComponent,
		PublicComponent,
		SigninComponent,
		SignupComponent,
		SecureComponent,
		AboutComponent,
		FaqComponent,
		PrivacyComponent,
		ContactusComponent,
		EnquirypopUpComponent,
		ForgotPasswordComponent,
		FileUploadComponent
	],
	imports: [ CommonModule, 		MatSelectModule,
		SharedRoutingModule, MatExpansionModule, MatDialogModule, ReactiveFormsModule, FormsModule ],
	exports: [ ContactusComponent ]
})
export class SharedModule {}
