import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from '../authentication/authentication.service';
import { LoginComponent } from './login.component';

// Inject Service in differenct way

class MockAuthService extends AuthenticationService {
  public isAuthenticated() {
    return true;
  }
}

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [AuthenticationService]
    })
      .compileComponents();

    TestBed.overrideComponent(
      LoginComponent,
      {
        set: {
          providers: [{
            provide: AuthenticationService, useClass: MockAuthService
          }]
        }
      }
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    authenticationService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD CREATE COMPONENT', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD CHECK THE SERVICE', () => {
    expect(authenticationService instanceof AuthenticationService).toBeTruthy();
  });

  it('SHOULD INJECT SERVICE USING INJECT FUNCTION CHECK ITS INSTANCE',
    inject([AuthenticationService], (injectedService: AuthenticationService) => {
      expect(injectedService).toBeTruthy();
      expect(injectedService instanceof AuthenticationService).toBeTruthy();
    })
  );

  it('SHOULD TEST INJECTED SERVICE INJECTED USING COMPONENT OVERRIDING', () => {
    let overRiddenService = fixture.debugElement.injector.get(AuthenticationService);
    expect(overRiddenService instanceof MockAuthService).toBeTruthy();
  });

});
