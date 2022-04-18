import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWidgetMotivationalTextsComponent } from './template-widget-motivational-texts.component';

describe('TemplateWidgetMotivationalTextsComponent', () => {
  let component: TemplateWidgetMotivationalTextsComponent;
  let fixture: ComponentFixture<TemplateWidgetMotivationalTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWidgetMotivationalTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWidgetMotivationalTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
