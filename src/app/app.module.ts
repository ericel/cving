import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './main/app.component';
import { AssetsComponent } from './assets/assets.component';
import { HomeComponent } from './home/home.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCRNe7vMZ7B1OzcOpdBQO7ixxDyF8z3exs",
  authDomain: "cving-c313e.firebaseapp.com",
  databaseURL: "https://cving-c313e.firebaseio.com",
  storageBucket: "cving-c313e.appspot.com",
  messagingSenderId: "90494333962"
};

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
