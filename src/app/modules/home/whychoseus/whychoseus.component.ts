import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-whychoseus',
	templateUrl: './whychoseus.component.html',
	styleUrls: [ './whychoseus.component.scss' ]
})
export class WhychoseusComponent implements OnInit {
	// For the counters
	public interval;
	public totalinventory: any = 0;

	public yearInterval;
	public totalweight: any = 0;

	public increaseInterval;
	public totalvalue: any = 0;

	constructor() {}

	ngOnInit() {
		this.interval = setInterval(() => {
			this.totalinventory = this.totalinventory + 220;
			if (this.totalinventory >= 57349) {
				clearInterval(this.interval);
			}
		}, 200);

		this.yearInterval = setInterval(() => {
			this.totalweight = this.totalweight + 1232883;
			if (this.totalweight >= 34738947) {
				clearInterval(this.yearInterval);
			}
		}, 200);

		this.increaseInterval = setInterval(() => {
			this.totalvalue = this.totalvalue + 92388797;
			if (this.totalvalue >= 4820934834) {
				clearInterval(this.increaseInterval);
			}
		}, 100);

		// constructor() { }
	}
	choosing = [
		{
			imgsrc: '../../../../assets/images/customer.png',
			heading: 'Customer Satisfaction',
			des: 'with EOXS'
		},
		{
			imgsrc: '../../../../assets/images/quality.png',
			heading: 'Quality',
			des: 'Quality is what the buyer says it is'
		},
		{
			imgsrc: '../../../../assets/images/efficiency.png',
			heading: 'Efficiency',
			des: 'Efficiency is intelligent laziness'
		},
		{
			imgsrc: '../../../../assets/images/services.png',
			heading: 'Service',
			des: 'Under promise. Over deliver'
		}
	];
}
