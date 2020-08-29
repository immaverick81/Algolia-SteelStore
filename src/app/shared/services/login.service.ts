import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BASE_URL } from '../../constants/app.constants';
@Injectable({
	providedIn: 'root'
})
export class LoginService {
	users: any[] = [];
	user: any;
	constructor(private http: HttpClient) { }

	login(email: string, password: string): Observable<any> {
		return this.http.post(`${BASE_URL}login`, {
			email: email,
			password: password
		});
	}

	signup(
		userName: string,
		password: string,
		email: string,
		firstName: string,
		lastName: string,
		phoneNumber: string
	): Observable<any> {
		return this.http.post(`${BASE_URL}signup`, {
			username: userName,
			email: email,
			password: password,
			firstname: firstName,
			lastname: lastName,
			phone: phoneNumber
		});
	}
}
