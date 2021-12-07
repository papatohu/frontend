import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetKvvComponent } from './template-widget-kvv.component';

describe('TemplateWidgetKvvComponent', () => {
  let component: TemplateWidgetKvvComponent;
  let fixture: ComponentFixture<TemplateWidgetKvvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetKvvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetKvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
