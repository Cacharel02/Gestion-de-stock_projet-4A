import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GestionDeStockService } from 'src/app/gestion-de-stock.service';
import { Produit } from './produit';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent {

  public produit : Produit = new Produit();


  constructor(private gestionDeStock : GestionDeStockService){}

  

}
