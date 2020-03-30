import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NopagesComponent } from './components/nopages/nopages.component';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
     NopagesComponent,
     MegaMenuComponent],
  imports: [
    CommonModule,

  ],

exports:[

FooterComponent,
HeaderComponent,


  ]
})
export class SharedModule { }
