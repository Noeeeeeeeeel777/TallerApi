import { TestBed } from '@angular/core/testing';

import { ApiTallerService } from './api-taller.service';

describe('ApiTallerService', () => {
  let service: ApiTallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
