import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'exos';

  ngOnInit(){
    AOS.init({
     
      easing: 'ease-in-sine',
      delay: 100,
    });


  }
}
