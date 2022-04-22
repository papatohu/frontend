import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOfTheDayComponent } from './text-of-the-day.component';

describe('TextOfTheDayComponent', () => {
  let component: TextOfTheDayComponent;
  let fixture: ComponentFixture<TextOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
