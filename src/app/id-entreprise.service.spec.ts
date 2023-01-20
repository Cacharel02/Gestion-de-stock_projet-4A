import { TestBed } from '@angular/core/testing';

import { IdEntrepriseService } from './id-entreprise.service';

describe('IdEntrepriseService', () => {
  let service: IdEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
