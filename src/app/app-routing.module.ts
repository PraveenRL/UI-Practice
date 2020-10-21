import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './components/events/events.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer-reservation',
    pathMatch: 'full'
  },
  {
    path: 'customer-reservation',
    loadChildren: () => import('./components/customer-reservation/customer-reservation.module')
      .then(m => m.CustomerReservationModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./components/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'async',
    component: ProductListComponent
  },
  {
    path: 'directive',
    component: CustomDirectiveComponent
  },
  {
    path: 'pipe',
    component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
