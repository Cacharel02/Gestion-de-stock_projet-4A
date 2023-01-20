import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEntrepriseComponent } from './interface-entreprise.component';

describe('InterfaceEntrepriseComponent', () => {
  let component: InterfaceEntrepriseComponent;
  let fixture: ComponentFixture<InterfaceEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
