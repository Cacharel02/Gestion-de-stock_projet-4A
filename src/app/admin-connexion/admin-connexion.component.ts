import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { IdEntrepriseService } from '../id-entreprise.service';
import { Entreprise } from '../new-entreprise/entreprise';
import { Administrateur } from './admin'

@Component({
  selector: 'app-admin-connexion',
  templateUrl: './admin-connexion.component.html',
  styleUrls: ['./admin-connexion.component.scss']
})
export class AdminConnexionComponent implements OnInit{

  id = 0;
  entrepriseId = 0;
  admin : Administrateur = new Administrateur();
  entreprise : Entreprise = new Entreprise();

  constructor(private gestionDeStock: GestionDeStockService, private route: Router, private service : IdEntrepriseService){}
  ngOnInit(): void {
    
  }

  public envoyer(form: NgForm){
    
    console.log('valeurs', JSON.stringify(form.value));
    this.gestionDeStock.getAdminId(form.value["codeAdmin"]).subscribe(
      reponse => {
        this.id = reponse;
        //this.function(reponse);
        console.log(this.id);
        this.idEntreprise = this.id;
        //this.route.navigateByUrl('/interface entreprise/'+this.id);
        this.route.navigateByUrl('/interface entreprise/liste produits');
      }
    );
    
  }

  /*public function(nombre:number):number{
    this.gestionDeStock.getEntrepriseByAdmin(nombre).subscribe(
      reponse => {
        this.entreprise = reponse;
        this.entrepriseId = reponse.id;
        console.log(this.entrepriseId);
      }
    );
    return this.entrepriseId;
  }*/

  public set idEntreprise(value:number){
    this.service.idEntreprise = value;
  }

}
