import { TestBed } from '@angular/core/testing';

import { GoogleService } from './google.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('GoogleService', () => {
  let service: GoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(GoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
