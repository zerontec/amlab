import { Component, HostListener, ViewChild, Renderer2, AfterViewInit, ElementRef } from '@angular/core';


@Component({
selector: 'mega-menu',
templateUrl: './mega-menu.component.html',
styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements AfterViewInit {
@ViewChild('nav', { static: true }) nav: NavbarComponent;

constructor(private renderer: Renderer2, private el: ElementRef) {}

transformDropdowns() {
const dropdownMenu = Array.from(this.el.nativeElement.querySelectorAll('.dropdown-menu'));
const navHeight = this.nav.navbar.nativeElement.clientHeight + 'px';

dropdownMenu.forEach((dropdown) => {
  this.renderer.setStyle(dropdown, 'transform', `translateY(${navHeight})`);
});
}

@HostListener('click', ['$event'])
onClick(event) {
const toggler = this.el.nativeElement.querySelector('.navbar-toggler');
const togglerIcon = this.el.nativeElement.querySelector('.navbar-toggler-icon');
if (event.target === toggler || event.target === togglerIcon) {
  console.log('test');
  setTimeout(() => {
    this.transformDropdowns();
  }, 351);
}
}

@HostListener('document:scroll', ['$event'])
onScroll() {
this.transformDropdowns();
}

@HostListener('window:resize', ['$event'])
onResize() {
  this.transformDropdowns();
}

ngAfterViewInit() {
this.transformDropdowns();
}

}