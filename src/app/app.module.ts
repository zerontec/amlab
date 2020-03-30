
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {CoreModule } from './core/core.module';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CoreModule ,
    SharedModule,
    RouterModule,
    APP_ROUTES


  ],
  exports:[
MDBBootstrapModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
