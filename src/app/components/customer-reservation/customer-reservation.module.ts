import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomerReservationComponent } from './customer-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerReservationComponent
  }
]

@NgModule({
  declarations: [
    CustomerReservationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerReservationModule { }
