import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../client-connexion/client';
import { GestionDeStockService } from '../gestion-de-stock.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {

  public client : Client = new Client();

  constructor(private gestionDeStock : GestionDeStockService){}

  public envoyer(form: NgForm){
    console.log('valeurs', JSON.stringify(form.value));
    this.gestionDeStock.creerClient(form.value["nom"],form.value["email"]).subscribe(
      reponse => {
        this.client = reponse;
      }
    );
  }
}
