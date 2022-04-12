import { TestBed } from '@angular/core/testing';

import { WidgetNasaService } from './widget-nasa.service';

describe('WidgetNasaService', () => {
  let service: WidgetNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
