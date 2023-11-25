import { TestBed } from '@angular/core/testing';

import { BatchlistService } from './batchlist.service';

describe('BatchlistService', () => {
  let service: BatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
