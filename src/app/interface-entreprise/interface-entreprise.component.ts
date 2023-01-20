import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { Entreprise } from '../new-entreprise/entreprise';
import { Produit } from './nouvel-article/produit';
import { MatDialog } from '@angular/material/dialog';
import { NouveauProduitComponent } from '../nouveau-produit/nouveau-produit.component';
import { MatButtonModule } from '@angular/material/button';
import { IdEntrepriseService } from '../id-entreprise.service';

@Component({
  selector: 'app-interface-entreprise',
  templateUrl: './interface-entreprise.component.html',
  styleUrls: ['./interface-entreprise.component.scss']
})
export class InterfaceEntrepriseComponent implements  OnInit{
  //public id:number = 0;

  public entreprise : Entreprise = new Entreprise();

  public produits : Produit[] = [];

  public id:number = 0;

 

  constructor(
    
    private router:Router, 
    private gestionDeStock : GestionDeStockService, 
    private httpClient:HttpClient,
    private route : ActivatedRoute,
    public dialog : MatDialog,
    private service : IdEntrepriseService
    ){
      //this.id = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    //let id = this.route.snapshot.params['id'];
    //this.id = this.route.snapshot.params['id'];
    this.gestionDeStock.getEntreprise(this.idEntreprise).subscribe(
      reponse => {
        this.entreprise = reponse;
      }
    )
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
    console.log(this.id);
    
  }


  public supprimer(produit:Produit){
    this.httpClient.delete('http://localhost:8080/services/produit/delete/'+produit.skuCode).subscribe();
    this.ngOnInit();
  }
  
  openDialog(){
    this.dialog.open(NouveauProduitComponent);
  }

  public getQte(skuCode:string):number{
    let n = 0;
    let id = this.route.snapshot.params['id'];
    if(true){
      this.gestionDeStock.getQte(id,skuCode).subscribe(
        reponse =>{
          n = reponse;
          console.log(reponse);
          return reponse;
        }
      )
    }
    return 0;
  }

  public get idEntreprise():number{
    return this.service.idEntreprise;
  }
}
