import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Client } from '../client-connexion/client';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { Produit } from '../interface-entreprise/nouvel-article/produit';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { IdEntrepriseService } from '../id-entreprise.service';
import { Route, Router } from '@angular/router';
import { IdClientService } from '../id-client.service';
import { NouveauProduitComponent } from '../nouveau-produit/nouveau-produit.component';
import { ModifierProduitService } from '../modifier-produit.service';
import { ModificationProduitComponent } from '../modification-produit/modification-produit.component';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnChanges,OnInit{
  //@Input()
  public produits : Produit[] = [];
  @Input()
  public type : boolean = false; //lorsque type est false, il s'agit d'un client
  @Input()
  public client : Client = new Client();

  qte : number = 1;

  constructor(private gestionDeStock : GestionDeStockService, private service : IdEntrepriseService, private route : Router, private idClientService:IdClientService,public dialog : MatDialog, private produitService:ModifierProduitService){

  }
  ngOnInit(): void {
    //if(this.idEntreprise==0 && this.idClient==0)this.route.navigateByUrl('/identification');
    if(this.idEntreprise==0 && this.idClient==0)this.route.navigateByUrl('/connexion admin');
    this.type = (this.idEntreprise==0)?false:true;
    if(this.idEntreprise!=0){
      this.gestionDeStock.getProduits(this.idEntreprise).subscribe(
        reponse => {
          this.produits = reponse;
          for(let produit of this.produits){
            //produit.quantite  = this.getQte(produit.skuCode);
            this.gestionDeStock.getQte(this.idEntreprise,produit.skuCode).subscribe(
              reponse =>{
                produit.quantite = reponse;
                console.log(reponse);
                //return reponse;
              }
            )
          }
        }
      )
    }
    if(this.idClient!=0){
      this.gestionDeStock.liste().subscribe(
        reponse => {
          this.produits = reponse;
        }
      )
    }
  }
  ngOnChanges(): void {
    this.produits = this.produits;
  }

  acheter(skuCode:string, prix:number, qte:number, idE:number){
    this.gestionDeStock.acheter(this.client.id,skuCode,prix,qte,idE);
  }

  public get idEntreprise():number{
    return this.service.idEntreprise;
  }

  public get idClient():number{
    return this.idClientService.idClient;
  }

  effectuerAchat(skuCode:string, quantite:number){
    this.gestionDeStock.effectuerAchat(this.idEntreprise, skuCode,quantite);
  }
  openDialog(){
    this.dialog.open(NouveauProduitComponent);
  }

  public set produitAmodifier(produit:Produit){
    this.produitService.produit = produit;
  }

  modifier(produit:Produit){
    this.produitAmodifier = produit;
    this.dialog.open(ModificationProduitComponent);
  }

}

