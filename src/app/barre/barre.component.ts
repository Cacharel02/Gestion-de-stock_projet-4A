import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IdClientService } from '../id-client.service';
import { IdEntrepriseService } from '../id-entreprise.service';

@Component({
  selector: 'app-barre',
  templateUrl: './barre.component.html',
  styleUrls: ['./barre.component.scss']
})
export class BarreComponent {
  @Input()
  public type : boolean = true;

  constructor(private clientService : IdClientService, private entrepriseService : IdEntrepriseService, private route:Router){

  }
  deconnecter(){
    if(this.type == false)this.idClient=0;
    if(this.type == true)this.idEntreprise=0;
    this.route.navigateByUrl("/identification");
  }

  public set idEntreprise(value:number){
    this.entrepriseService.idEntreprise = value;
  }

  public set idClient(value:number){
    this.clientService.idClient = value;
  }
}
