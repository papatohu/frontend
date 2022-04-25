import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonPopupComponent } from './cartoon-popup.component';

describe('CartoonPopupComponent', () => {
  let component: CartoonPopupComponent;
  let fixture: ComponentFixture<CartoonPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoonPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
