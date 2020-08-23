import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
 
  bloglist=[
    {
    image:'/assets/images/blog.png',
      title:'This article raises interesting data regarding North American manufacturers',    
      para:'Automation will help companies improve their workflows in the post-COVID world. We see that 25% of US manufacturers are considering expanding industrial automation as a result of COVID-19. which is a good thing. The transition to an automated supply chain will improve the agility of your business, consistently deliver fresh insight, and consistent results.'
    },
    {
      image:'/assets/images/blog.png',
        title:'This article raises interesting data regarding North American manufacturers',    
        para:'Automation will help companies improve their workflows in the post-COVID world. We see that 25% of US manufacturers are considering expanding industrial automation as a result of COVID-19. which is a good thing. The transition to an automated supply chain will improve the agility of your business, consistently deliver fresh insight, and consistent results.'
      },
      {
        image:'/assets/images/blog.png',
          title:'This article raises interesting data regarding North American manufacturers',    
          para:'Automation will help companies improve their workflows in the post-COVID world. We see that 25% of US manufacturers are considering expanding industrial automation as a result of COVID-19. which is a good thing. The transition to an automated supply chain will improve the agility of your business, consistently deliver fresh insight, and consistent results.'
        },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
