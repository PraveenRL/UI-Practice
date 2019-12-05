import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './decorator/child/child.component';
import { ParentComponent } from './decorator/parent/parent.component';
import { LoginComponent } from './sign/login/login.component';
import { SignupComponent } from './sign/signup/signup.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SignService } from './service/sign.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SignService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
