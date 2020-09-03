import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: [ './faq.component.scss' ]
})
export class FaqComponent implements OnInit {
	faqlist = [
		{
			title: 'What is EOXS?',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		},
		{
			title: 'Why this website?',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		},
		{
			title: 'How do you make money?',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		},
		{
			title: 'How is delivery done?',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		},
		{
			title: 'How is freight price calculated?',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		},
		{
			title: 'Acceptable payment methods',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		},
		{
			title: 'What are your terms',
			description: 'What do you sell?',
			descriptiondetail:
				'We sell prime, excess prime, and secondary industrial materials. Our prime material comes from the original manufacturers. We buy direct from vetted and approved global manufacturers. Our excess prime is also prime material and it comes from our large “circulating” supplier base. This is material for which its current owner doesn'
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
