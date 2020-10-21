import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { HelloDirective } from './components/custom-directive/hello.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SquarePipe } from './components/pipes/square.pipe';
import { EnclosePipe } from './components/pipes/enclose.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ProductListComponent,
    LoginComponent,
    HelloDirective,
    CustomDirectiveComponent,
    PipesComponent,
    SquarePipe,
    EnclosePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
