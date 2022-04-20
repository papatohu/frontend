import { TestBed } from '@angular/core/testing';

import { WidgetStocksService } from './widget-stocks.service';

describe('WidgetStocksService', () => {
  let service: WidgetStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
