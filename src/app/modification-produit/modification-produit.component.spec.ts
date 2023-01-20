import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationProduitComponent } from './modification-produit.component';

describe('ModificationProduitComponent', () => {
  let component: ModificationProduitComponent;
  let fixture: ComponentFixture<ModificationProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
