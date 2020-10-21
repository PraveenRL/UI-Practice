import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.scss']
})
export class CustomerReservationComponent {

  private hotelRoomCapacity: number = 30;
  private customerCount: number = 10;

  public registerCustomer() {
    return ++this.customerCount;
  }

  public unRegisterCustomer() {
    return --this.customerCount;
  }

  public reserveRoom() {
    let roomReserved = false;
    if (this.customerCount < this.hotelRoomCapacity) {
      this.customerCount++;
      roomReserved = true;
    }
    return roomReserved;
  }

}
