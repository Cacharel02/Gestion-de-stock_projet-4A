import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { IdEntrepriseService } from '../id-entreprise.service';
import { Produit } from '../interface-entreprise/nouvel-article/produit';
import { ModifierProduitService } from '../modifier-produit.service';

@Component({
  selector: 'app-modification-produit',
  templateUrl: './modification-produit.component.html',
  styleUrls: ['./modification-produit.component.scss']
})
export class ModificationProduitComponent implements OnInit {

  ngOnInit(): void {
    this.produit = this.produitAmodifier;
    this.gestion.getProduit(this.produit.skuCode,this.idEntreprise).subscribe(
      reponse=>{
        this.id = reponse;
      }
    )
  }

  constructor(private produitService : ModifierProduitService, private route : ActivatedRoute, private gestion:GestionDeStockService, private idEntrepriseService:IdEntrepriseService){

  }

  public produit : Produit = new Produit();
  public id:number = 0;

  public get produitAmodifier():Produit{
    return this.produitService.produit;
  }
  public envoyer(form: NgForm){
    this.gestion.modifierProduit(this.id, form.value["skuCode"],form.value["description"], form.value["prix"]);
  }

  public get idEntreprise(){
    return this.idEntrepriseService.idEntreprise;
  }
}
