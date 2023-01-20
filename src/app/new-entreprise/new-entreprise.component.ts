import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { Entreprise } from './entreprise';

@Component({
  selector: 'app-new-entreprise',
  templateUrl: './new-entreprise.component.html',
  styleUrls: ['./new-entreprise.component.scss']
})
export class NewEntrepriseComponent implements OnInit {
  
  public entreprise : Entreprise = new Entreprise();

  constructor(private gestionDeStock: GestionDeStockService){}
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  public envoyer(form: NgForm){
    console.log('valeurs', JSON.stringify(form.value));
    this.gestionDeStock.creerEntreprise(form.value["nom"],form.value["adresse"],form.value["email"]).subscribe(
      reponse => {
        this.entreprise = reponse;
      }
    );
  }
}
