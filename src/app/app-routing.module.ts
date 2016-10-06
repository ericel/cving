import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './main/app.component';
import { AssetsComponent } from './assets/assets.component';

const routes: Routes = [
   {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Submit your cv and wait'
    }
  },
  {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
  },
   {
    path: 'assets',
    component: AssetsComponent,
    data: {
      title: 'Submit your cv and wait'
    }
  },


];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
