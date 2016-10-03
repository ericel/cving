import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
