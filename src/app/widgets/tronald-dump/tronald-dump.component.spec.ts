import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronaldDumpComponent } from './tronald-dump.component';

describe('TronaldDumpComponent', () => {
  let component: TronaldDumpComponent;
  let fixture: ComponentFixture<TronaldDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronaldDumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronaldDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
