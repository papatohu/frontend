import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetNasaComponent } from './template-widget-nasa.component';

describe('TemplateWidgetNasaComponent', () => {
  let component: TemplateWidgetNasaComponent;
  let fixture: ComponentFixture<TemplateWidgetNasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetNasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
