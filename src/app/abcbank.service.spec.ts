import { TestBed } from '@angular/core/testing';

import { AbcbankService } from './abcbank.service';

describe('AbcbankService', () => {
  let service: AbcbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbcbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
