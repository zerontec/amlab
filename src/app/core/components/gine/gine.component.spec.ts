import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GineComponent } from './gine.component';

describe('GineComponent', () => {
  let component: GineComponent;
  let fixture: ComponentFixture<GineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
