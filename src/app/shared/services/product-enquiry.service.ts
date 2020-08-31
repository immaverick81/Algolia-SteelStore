import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/constants/app.constants';
import { ProductEnquiryModel } from '../models/product-enquiry.model';

@Injectable({
    providedIn: 'root'
})

export class ProductEnquiryService {
    constructor(private _httpClient: HttpClient) {}

    submitEnquiry(enquiryDetails: ProductEnquiryModel) {
        this._httpClient.post(`${BASE_URL}/submitEnquiry`, enquiryDetails);
    }
}