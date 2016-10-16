import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Title }     from '@angular/platform-browser';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 

  isHeader: boolean = false;

  title = 'app works!';
   isDarkTheme: boolean = false;
	 
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];
  
  progress: number = 0;
  items: FirebaseListObservable<any[]>;
  

  constructor(private titleService: Title, af: AngularFire, router: ActivatedRoute) {
    //titleService = "Goaf the world wide web";
    //this.route = router.url.toString();
   router.url.subscribe(urlSegments =>
     {
        console.log(urlSegments);
     });
    console.log(router.snapshot);
    this.items = af.database.list('items');
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);

    
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( "newTitle");
  }
  /*constructor(private router: RouterModule){}

  routeIsActive(routePath: string) {
     let currentRoute = this.router.currentInstruction.component.routeName; 
     console.log(currentRoute);
     // e.g. 'Login' or null if route is '/'
     let segment = currentRoute == null ? '/' : currentRoute.segment;
     return  segment == routePath;
  }*/

}
