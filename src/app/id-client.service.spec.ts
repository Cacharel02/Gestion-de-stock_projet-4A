import { TestBed } from '@angular/core/testing';

import { IdClientService } from './id-client.service';

describe('IdClientService', () => {
  let service: IdClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
