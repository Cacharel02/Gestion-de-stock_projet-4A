import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client-connexion/client';
import { GestionDeStockService } from '../gestion-de-stock.service';
import { IdClientService } from '../id-client.service';
import { IdEntrepriseService } from '../id-entreprise.service';
import { Entreprise } from '../new-entreprise/entreprise';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input()
  public type : boolean = false;
  //@Input()
  public entreprise : Entreprise = new Entreprise();
  @Input()
  public client : Client = new Client();

  constructor(private gestionDeStock : GestionDeStockService, private service : IdEntrepriseService, private route : Router, private idClientService:IdClientService){

  }

  ngOnInit(): void {
    if(this.idEntreprise==0 && this.idClient==0)this.route.navigateByUrl('/connexion admin');
    this.type = (this.idEntreprise==0)?false:true;
    if(this.idEntreprise!=0){
      this.gestionDeStock.getEntreprise(this.idEntreprise).subscribe(
        reponse => {
          this.entreprise = reponse;
        }
      )
    }
    if(this.idClient!=0){
      this.gestionDeStock.getClient(this.idClient).subscribe(
        reponse => {
          this.client = reponse;
        }
      )
    }

  }

  public get idEntreprise():number{
    return this.service.idEntreprise;
  }

  public get idClient():number{
    return this.idClientService.idClient;
  }
}
