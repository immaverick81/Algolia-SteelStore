import { Component, OnInit, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Options } from 'ng5-slider';

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: [ './listing.component.scss' ]
})
export class ListingComponent implements OnInit {
	public enquiryDetails = {
		email: '',
		coilNumber: '',
		objectID: '',
		productName: ''
	};
	@Input() data: any;

	value: number = 0.009;
	highValue: number = 0.3;
	options: Options = {
		floor: 0.005,
		ceil: 0.501
	};

	value1: number = 1;
	highValue1: number = 30;
	options1: Options = {
		floor: 1,
		ceil: 80
	};

	constructor(private modalService: NgbModal, public router: Router) {}

	getProductId = (objectID) => (objectID ? `TSS${objectID}` : 'NA');

	ngOnInit() {
		console.log(this.data);
	}
	@Input() public xyz;
	@Input() public list: ArrayType;
	// @Input() public gloabalSearchKey;
}
