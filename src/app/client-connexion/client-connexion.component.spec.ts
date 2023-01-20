import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConnexionComponent } from './client-connexion.component';

describe('ClientConnexionComponent', () => {
  let component: ClientConnexionComponent;
  let fixture: ComponentFixture<ClientConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
