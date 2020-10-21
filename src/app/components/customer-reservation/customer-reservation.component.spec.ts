import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReservationComponent } from './customer-reservation.component';

xdescribe('CustomerReservationComponent', () => {
  let component: CustomerReservationComponent;
  let fixture: ComponentFixture<CustomerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerReservationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Register Customer / Increase current customer count by 1', () => {
    let custService = new CustomerReservationComponent;
    let custCount = custService.registerCustomer();
    expect(custCount).toEqual(11);
  });

  it('Should Un-Register Customer / Decrease current customer count by 1', () => {
    let custService = new CustomerReservationComponent;
    let custCount = custService.unRegisterCustomer();
    expect(custCount).toEqual(9);
  });

  // AAA
  it('Testing room is reserved or not', () => {
    //Arrange
    let custReserve = new CustomerReservationComponent();

    //Act
    let isReserved = custReserve.reserveRoom();

    //Assert
    expect(isReserved).toBeTruthy();
  });

});
