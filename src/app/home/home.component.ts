import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Title }     from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 isHeader: boolean = true;
 title = "This is the home component!";
  constructor(private titleService: Title, router: ActivatedRoute) {
  	//console.log(router.url);
  	router.url.subscribe(urlSegments =>
   {
      console.log(urlSegments);
   });
  	this.isHeader = true;
   }

  ngOnInit() {
  	this.isHeader = true;
  	this.titleService.setTitle( "newTitle");
  }

}
