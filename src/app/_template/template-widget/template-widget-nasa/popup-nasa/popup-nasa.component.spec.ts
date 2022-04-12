import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNasaComponent } from './popup-nasa.component';

describe('PopupNasaComponent', () => {
  let component: PopupNasaComponent;
  let fixture: ComponentFixture<PopupNasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
