import { TestBed } from '@angular/core/testing';

import { ParasService } from './paras.service';

describe('ParasService', () => {
  let service: ParasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
