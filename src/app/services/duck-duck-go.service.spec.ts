import { TestBed } from '@angular/core/testing';

import { DuckDuckGoService } from './duck-duck-go.service';

describe('DuckDuckGoService', () => {
  let service: DuckDuckGoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuckDuckGoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
