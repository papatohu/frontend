import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetStocksComponent } from './template-widget-stocks.component';

describe('TemplateWidgetStocksComponent', () => {
  let component: TemplateWidgetStocksComponent;
  let fixture: ComponentFixture<TemplateWidgetStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
