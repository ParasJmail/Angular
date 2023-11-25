import { TestBed } from '@angular/core/testing';

import { ArithemethicService } from './arithemethic.service';

describe('ArithemethicService', () => {
  let service: ArithemethicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithemethicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
