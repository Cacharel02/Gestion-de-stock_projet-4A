import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { IdEntrepriseService } from '../id-entreprise.service';
import { Produit } from '../interface-entreprise/nouvel-article/produit';

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.scss']
})
export class NouveauProduitComponent {
  public produit : Produit = new Produit();


  constructor(private gestionDeStock : GestionDeStockService, private route:ActivatedRoute, private service : IdEntrepriseService){}

  public envoyer(form: NgForm){
    let id = this.route.snapshot.params['id'];
    console.log('valeurs', JSON.stringify(form.value));
    console.log(this.idEntreprise);
    this.gestionDeStock.ajouterProduit(form.value["skuCode"],form.value["description"],form.value["prix"],this.idEntreprise).subscribe();
  }

  public get idEntreprise():number{
    return this.service.idEntreprise;
  }
}
