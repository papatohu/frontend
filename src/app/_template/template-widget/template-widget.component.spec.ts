import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetComponent } from './template-widget.component';

describe('TemplateWidgetComponent', () => {
  let component: TemplateWidgetComponent;
  let fixture: ComponentFixture<TemplateWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
