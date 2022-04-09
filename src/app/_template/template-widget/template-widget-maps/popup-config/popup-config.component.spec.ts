import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfigComponent } from './popup-config.component';

describe('PopupConfigComponent', () => {
  let component: PopupConfigComponent;
  let fixture: ComponentFixture<PopupConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
