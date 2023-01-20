import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GestionDeStockService } from 'src/app/gestion-de-stock.service';
import { LigneCmdClient } from './ligneCmdClient';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.scss']
})
export class CommandeClientComponent implements OnInit, OnChanges {
  
  @Input()
  numero : string = "0cc25e0e-cf31-489e-8619-ebcabd5792c2";
  //numero : string = "";
  lignes : LigneCmdClient[] = [];

  constructor(private gestion : GestionDeStockService){

  }

  ngOnChanges(){
    this.gestion.getLignes(this.numero).subscribe(
      reponse => {
        this.lignes = reponse;
      }
    )
  }

  ngOnInit(): void {
    this.gestion.getLignes(this.numero).subscribe(
      reponse => {
        this.lignes = reponse;
      }
    )
  }
}
