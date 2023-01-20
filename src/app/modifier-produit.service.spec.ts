import { TestBed } from '@angular/core/testing';

import { ModifierProduitService } from './modifier-produit.service';

describe('ModifierProduitService', () => {
  let service: ModifierProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
