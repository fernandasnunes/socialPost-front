import { TestBed } from '@angular/core/testing';

import { ApiGoRestService } from './api-go-rest.service';

describe('ApiGoRestService', () => {
  let service: ApiGoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
