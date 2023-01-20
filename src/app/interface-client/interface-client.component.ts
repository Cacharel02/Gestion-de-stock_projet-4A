import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client-connexion/client';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { IdClientService } from '../id-client.service';
import { Produit } from '../interface-entreprise/nouvel-article/produit';
import { CommandeClient } from './commande';

@Component({
  selector: 'app-interface-client',
  templateUrl: './interface-client.component.html',
  styleUrls: ['./interface-client.component.scss']
})
export class InterfaceClientComponent implements OnInit{
  id : number = 0;
  client : Client = new Client();
  commandes : CommandeClient[] = [];
  produits : Produit[] = [];

  constructor(private route:Router, private gestionDeStock:GestionDeStockService, private aRoute : ActivatedRoute, private idService:IdClientService){

  }
  ngOnInit(): void {
    //this.id = this.aRoute.snapshot.params['id'];
    this.gestionDeStock.getClient(this.idClient).subscribe(
      reponse => {
        this.client = reponse;
      }
    )
    this.gestionDeStock.getCommandes(this.idClient).subscribe(
      reponse => {
        this.commandes = reponse;
      }
    )
    this.gestionDeStock.liste().subscribe(
      reponse => {
        this.produits = reponse;
      }
    )
  }

  public get idClient():number{
    return this.idService.idClient;
  }

}
