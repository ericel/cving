import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './main/app.component';
import { AssetsComponent } from './assets/assets.component';

const routes: Routes = [
   {
    path: '',
    component: AppComponent,
    data: {
      title: 'Submit your cv and wait'
    }
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
