import { TestBed } from '@angular/core/testing';

import { DuckDuckGoService } from './duck-duck-go.service';
import { HttpClientModule } from '@angular/common/http';

describe('DuckDuckGoService', () => {
  let service: DuckDuckGoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(DuckDuckGoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
