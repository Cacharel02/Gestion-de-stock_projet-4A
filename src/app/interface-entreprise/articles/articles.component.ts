import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GestionDeStockService } from 'src/app/gestion-de-stock.service';
import { Produit } from '../nouvel-article/produit';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnChanges{
  
  produits : Produit[] = [];

  constructor(private gestionDeStock:GestionDeStockService, private router:Router, private httpClient:HttpClient){
    
  }

  ngOnChanges(){
    /*this.gestionDeStock.getProduits().subscribe(
      reponse => {
        this.produits = reponse;
      }
    )*/
  }

  ngOnInit(): void {
    /*this.gestionDeStock.getProduits().subscribe(
      reponse => {
        this.produits = reponse;
      }
    )*/
  }

  public supprimer(produit:Produit){
    this.httpClient.delete('http://localhost:8080/services/produit/delete/'+produit.skuCode).subscribe();
    this.ngOnInit();
  }
}
