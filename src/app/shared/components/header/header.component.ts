import { Component, OnInit } from '@angular/core';
import { NavbarModule, WavesModule, DropdownModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
