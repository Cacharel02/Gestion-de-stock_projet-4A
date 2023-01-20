import { TestBed } from '@angular/core/testing';

import { GestionDeStockService } from './gestion-de-stock.service';

describe('GestionDeStockService', () => {
  let service: GestionDeStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDeStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
