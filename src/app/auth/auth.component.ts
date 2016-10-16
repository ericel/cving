import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

   constructor(router: ActivatedRoute) {
  	//console.log(router.url);
  	router.url.subscribe(urlSegments =>
   {
      console.log(urlSegments);
   });
   }

  ngOnInit() {
  }

}
