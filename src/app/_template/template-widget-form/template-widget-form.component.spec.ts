import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetFormComponent } from './template-widget-form.component';

describe('TemplateWidgetFormComponent', () => {
  let component: TemplateWidgetFormComponent;
  let fixture: ComponentFixture<TemplateWidgetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
