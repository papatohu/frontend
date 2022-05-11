import { TestBed } from '@angular/core/testing';

import { TrumpService } from './trump.service';

describe('TrumpService', () => {
  let service: TrumpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrumpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
