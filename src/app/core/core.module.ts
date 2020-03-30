import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule} from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LaboComponent } from './components/labo/labo.component';
import { GineComponent } from './components/gine/gine.component';
import { EcoComponent } from './components/eco/eco.component';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [HomeComponent,
     SliderComponent, 
     LaboComponent,
     GineComponent,
    EcoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MDBBootstrapModule,
    RouterModule
  ]
})
export class CoreModule { }
