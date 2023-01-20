import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Entreprise } from './new-entreprise/entreprise';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from './interface-entreprise/nouvel-article/produit';
import { Administrateur } from './admin-connexion/admin';
import { Client } from './client-connexion/client';
import { LigneCmdClient } from './interface-client/commande-client/ligneCmdClient';
import { CommandeClient } from './interface-client/commande';

@Injectable({
  providedIn: 'root'
})
export class GestionDeStockService {

  constructor(private httpClient: HttpClient) { }

  creerEntreprise(nom:string, adresse:string, email:string) : Observable<Entreprise>{
    return this.httpClient.post<Entreprise>('http://localhost:8080/entreprises/creer',{
      "nom": nom,
      "adresse":adresse,
      "email":email
    });
  }

  creerClient(nom:string, email:string) : Observable<Client>{
    return this.httpClient.post<Client>('http://localhost:8080/clients/creer',{
      "nom": nom,
      "email":email
    });
  }

  getEntreprise(id:number):Observable<Entreprise>{
    return this.httpClient.get<Entreprise>('http://localhost:8080/entreprises/'+id);
  }

  getProduits(id:number):Observable<Produit[]>{
    return this.httpClient.get<Produit[]>('http://localhost:8080/services/produit/getProduits/'+id);
  }

  getEntrepriseByAdmin(id:number):Observable<Entreprise>{
    let message = ''+id;
    return this.httpClient.get<Entreprise>('http://localhost:8080/entreprises/getByAdmin/'+message);
  }

  getAdminId(codeAdmin:string):Observable<number>{
    return this.httpClient.get<number>('http://localhost:8080/admin/getAdminId/'+codeAdmin);
  }

  /*ajouterProduit(skuCode:string, description:string, prix:number, id:number):Observable<String>{
    return this.httpClient.put<String>('http://localhost:8080/entreprises/ajouterProduit/'+id,{
      "skuCode":skuCode,
      "description":description,
      "prix":prix
    })
    
  }*/
  ajouterProduit(skuCode:string, description:string, prix:number, id:number):Observable<String>{
    return this.httpClient.post<String>('http://localhost:8080/entreprises/ajouterProduit/'+id+'?skuCode='+skuCode+'&prix='+prix,{})
    
  }

  getQte(id:number, skuCode:string):Observable<number>{
    return this.httpClient.get<number>('http://localhost:8080/services/stock/getQte?idEntreprise='+id+'&skuCode='+skuCode);
  }

  getClientId(codeClient:string):Observable<number>{
    return this.httpClient.get<number>('http://localhost:8080/clients/get/'+codeClient);
  }

  getClient(id:number):Observable<Client>{
    return this.httpClient.get<Client>('http://localhost:8080/clients/'+id);
  }
  
  getLignes(numero:string):Observable<LigneCmdClient[]>{
    return this.httpClient.get<LigneCmdClient[]>('http://localhost:8080/commandeClient/getLignes/'+numero);
  }

  getCommandes(id:number):Observable<CommandeClient[]>{
    return this.httpClient.get<CommandeClient[]>('http://localhost:8080/commandeClient/getCommandes/'+id);
  }

  liste():Observable<Produit[]>{
    return this.httpClient.get<Produit[]>('http://localhost:8080/services/produit/liste');
  }

  creerCommande(id:number):Observable<CommandeClient>{
    return this.httpClient.post<CommandeClient>('http://localhost:8080/commandeClient/creerCmd/'+id,{})
  }

  private getId(numero:string):Observable<number>{
    let nombre:number;
    return this.httpClient.get<number>('http://localhost:8080/commandeClient/getId/'+numero,{})
  }
  acheter(id:number,skuCode:string, prix:number, qte:number, idE:number){
    let commande : CommandeClient ;
    let idCmd;
    this.creerCommande(id).subscribe(
      reponse =>{
        commande = reponse;
        this.getId(commande.numero).subscribe(
          reponse=>{
            idCmd = reponse;
            this.httpClient.post<string>('http://localhost:8080/commandeClient/ajouterligne/'+idCmd,{
              "skuCode" : skuCode,
              "prix" : prix,
              "quantite" : qte
            }).subscribe();
            this.httpClient.put<string>('http://localhost:8080/services/stock/enlever?skuCode='+skuCode+'&quantite='+qte+'&idEntreprise='+idE,{
            }).subscribe();
            this.httpClient.put<string>('http://localhost:8080/entreprises/setFond/'+idE+'?value='+qte*prix,{
            }).subscribe();
            
          }
        )
      }
    )
    
    
  }

  effectuerAchat(id:number, skuCode:string, quantite:number){
    this.httpClient.post('http://localhost:8080/entreprises/acheter?idEntreprise='+id+'&skuCode='+skuCode+'&quantite='+quantite,{}).subscribe();
  }

  /*modifierProduit(lastSkuCode:string, newSkuCode:string, description:string, prix:number){
    this.getProduit(lastSkuCode).subscribe(
      reponse=>{
        let id = reponse;
        this.httpClient.put('http://localhost:8080/services/produit/modifier/'+id,{
          "skuCode":newSkuCode,
          "description":description,
          "prix":prix

        }).subscribe();
      }
    )
    
  }*/
  modifierProduit(id:number, newSkuCode:string, description:string, prix:number){
    this.httpClient.put('http://localhost:8080/services/produit/modifier/'+id,{
          "skuCode":newSkuCode,
          "description":description,
          "prix":prix

        }).subscribe();
    
  }
  getProduit(lastSkuCode:string, idEntreprise:number):Observable<number>{
    return this.httpClient.get<number>('http://localhost:8080/services/produit/getproduit/'+lastSkuCode+'?idEntreprise='+idEntreprise);
  }
}
