import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-productmainwraaper',
  templateUrl: './productmainwraaper.component.html',
  styleUrls: ['./productmainwraaper.component.scss'],
})
export class ProductmainwraaperComponent implements OnInit {
  productname: string;
  currentRoute: any
  constructor( public router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.productname= this.currentRoute.split('/')[2]
    this.productname.replace('-', '')

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
      
    console.log(this.router.url); //  /routename
    this.currentRoute = this.router.url;
    this.productname= this.currentRoute.split('/')[2]
    this.productname?.replace('-', '')
}
    });


    // console.log()
  }
  routetab = [
    {
      tabname: 'Galvanized',
      routes: '/steel/galvanized',
    },
    {
      tabname: 'Galvalume',
      routes: '/steel/galvalume',
    },
    {
      tabname: 'Galvaneneal',
      routes: '/steel/galvaneneal',
    },
    {
      tabname: 'Hot Roll',
      routes: '/steel/hot-roll',
    },
    {
      tabname: 'Cold Roll',
      routes: '/steel/cold-roll',
    },
    {
      tabname: 'Electro Galvanized',
      routes: '/steel/electro-galvanized',
    },
  ];
}
