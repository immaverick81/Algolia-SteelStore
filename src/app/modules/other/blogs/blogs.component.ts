import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
 
  bloglist=[
    {
    image:'/assets/images/blog3.jpg',
      title:'EOXS:  An Online Steel Marketplace ',    
      para: 'The steel industry has functioned seamlessly for decades by following a traditional business model. This tried and tested approach has given rise to Tier one tier 2 suppliers and brokers leveraging their connections with each other and steel mills to procure the steel needs of the end customer.',
      link: '/blogs-details-1'
    },
    {
      image:'/assets/images/blog1.jpg',
        title:'Why should US Steel Suppliers and Distributors turn to Technology to improve efficiency and create value?',    
        para:'The steel industry has been thriving for the last century, especially in the United States. So far in 2020, the domestic raw steel production was 1,383,000 net tons. To compete in the global scale, steel companies are adding value to their supply chain through digital transformation.',
        link: '/blogs-details-2'

      },
      {
        image:'/assets/images/blog 3.jpg',
          title:'Benefits of procuring steel online ',    
          para: 'The steel industry has been offline for decades. Information regarding delivery and inventory is scarce or often, incomplete. The purchase manager’s list of steel supplier and distributors is limited. When undertaking a project, the executive has to source suppliers and involve in tedious, long drawn conversations with them. The choices are limited, processes are piling up and costs seem to increase everyday. ',
          link: '/blogs-details-3'

        },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
