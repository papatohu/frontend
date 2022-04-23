import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsPopupComponent } from './maps-popup.component';

describe('MapsPopupComponent', () => {
  let component: MapsPopupComponent;
  let fixture: ComponentFixture<MapsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
