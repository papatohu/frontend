import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetCartoonComponent } from './template-widget-cartoon.component';

describe('TemplateWidgetCartoonComponent', () => {
  let component: TemplateWidgetCartoonComponent;
  let fixture: ComponentFixture<TemplateWidgetCartoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetCartoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
