import { TestBed } from '@angular/core/testing';

import { Jssha256Service } from './jssha256.service';

describe('Jssha256Service', () => {
  let service: Jssha256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jssha256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
