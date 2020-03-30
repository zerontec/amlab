import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { Component } from '@angular/core';
import { GineComponent } from './core/components/gine/gine.component';
import { EcoComponent } from './core/components/eco/eco.component';
import { LaboComponent } from './core/components/labo/labo.component';
import { NopagesComponent } from './shared/components/nopages/nopages.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { AboutComponent } from './core/components/about/about.component';


const appRoutes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ginecologia', component: GineComponent},
    {path: 'ecografia', component: EcoComponent},
    {path: 'laboratorio', component: LaboComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: '**', component: NopagesComponent},



];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, );
