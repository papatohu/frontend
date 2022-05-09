import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTransportPopupComponent } from './public-transport-popup.component';

describe('PublicTransportPopupComponent', () => {
  let component: PublicTransportPopupComponent;
  let fixture: ComponentFixture<PublicTransportPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTransportPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
