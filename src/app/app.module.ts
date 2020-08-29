import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgAisModule } from 'angular-instantsearch';

import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production
		}),
		BrowserAnimationsModule,
		SharedModule,
		NgbModule,
		NgAisModule.forRoot(),
		MatDialogModule,
		ToastrModule.forRoot(),
		HttpClientModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
