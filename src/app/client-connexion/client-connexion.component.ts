import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { IdClientService } from '../id-client.service';
import { IdEntrepriseService } from '../id-entreprise.service';
import { Client } from './client';

@Component({
  selector: 'app-client-connexion',
  templateUrl: './client-connexion.component.html',
  styleUrls: ['./client-connexion.component.scss']
})
export class ClientConnexionComponent {
  
  client : Client = new Client();

  constructor(private gestionDeStock: GestionDeStockService, private route: Router, private service : IdClientService){}
  ngOnInit(): void {
    
  }

  public envoyer(form: NgForm){
    
    console.log('valeurs', JSON.stringify(form.value));
    this.gestionDeStock.getClientId(form.value["codeClient"]).subscribe(
      reponse => {
        let id = reponse;
        console.log(id);
        this.route.navigateByUrl('/interface client/liste produits');
        this.idClient = id;
      }
    );
    
  }
  public set idClient(value:number){
    this.service.idClient = value;
  }
}
