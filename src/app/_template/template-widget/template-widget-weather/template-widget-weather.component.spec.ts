import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetWeatherComponent } from './template-widget-weather.component';

describe('TemplateWidgetWeatherComponent', () => {
  let component: TemplateWidgetWeatherComponent;
  let fixture: ComponentFixture<TemplateWidgetWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetWeatherComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
