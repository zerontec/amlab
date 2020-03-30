import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagesComponent } from './nopages.component';

describe('NopagesComponent', () => {
  let component: NopagesComponent;
  let fixture: ComponentFixture<NopagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
