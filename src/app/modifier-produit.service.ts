import { Injectable } from '@angular/core';
import { Produit } from './interface-entreprise/nouvel-article/produit';

@Injectable({
  providedIn: 'root'
})
export class ModifierProduitService {

  public produit : Produit = new Produit();
  constructor() { }
}
