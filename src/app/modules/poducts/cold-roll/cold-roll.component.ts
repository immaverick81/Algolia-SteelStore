import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.apiKey
);
@Component({
  selector: 'app-cold-roll',
  templateUrl: './cold-roll.component.html',
  styleUrls: ['./cold-roll.component.scss'],
})
export class ColdRollComponent implements OnInit {
  constructor() {}
  config = {
    indexName: 'COLD_ROLL',
    searchClient,
  };

  ngOnInit(): void {}

  coldrol = [
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
    {
      product: 'Galvanized',
      quality: 'Prime',
      thickness: '0.78',
      width: '42',
      weight: '1078',
      piw: '2897',
      location: 'DETROIT',
      coilnumber: '98798',
    },
  ];
}
