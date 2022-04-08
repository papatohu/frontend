import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetMapsComponent } from './template-widget-maps.component';

describe('TemplateWidgetMapsComponent', () => {
  let component: TemplateWidgetMapsComponent;
  let fixture: ComponentFixture<TemplateWidgetMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
