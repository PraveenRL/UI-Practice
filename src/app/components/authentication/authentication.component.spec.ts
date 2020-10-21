import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';

xdescribe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let authenticationService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      providers: [AuthenticationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    authenticationService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should call check authenication and return value of Salary Slip', () => {
    //spyOn help to inject a service and can return value and more
    spyOn(authenticationService, 'checkAuthenticate').and.returnValue(true);  
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
    expect(authenticationService.checkAuthenticate).toHaveBeenCalled();
  });

  it('Should assert value for h1 element to the value of component', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salarySlip);
  });
});
