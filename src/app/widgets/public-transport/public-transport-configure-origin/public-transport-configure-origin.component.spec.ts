import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTransportConfigureOriginComponent } from './public-transport-configure-origin.component';

describe('PublicTransportConfigureOriginComponent', () => {
  let component: PublicTransportConfigureOriginComponent;
  let fixture: ComponentFixture<PublicTransportConfigureOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTransportConfigureOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransportConfigureOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
