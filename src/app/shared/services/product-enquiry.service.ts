import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/constants/app.constants';
import { ProductEnquiryModel } from '../models/product-enquiry.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductEnquiryService {
    constructor(private _httpClient: HttpClient) {}

    submitEnquiry(enquiryDetails: ProductEnquiryModel): Observable<ProductEnquiryModel> {
        return this._httpClient.post<ProductEnquiryModel>(`https://thesteel.store:8009/reibus/api/v1/reibus/enquireNow`, enquiryDetails);
    }
}