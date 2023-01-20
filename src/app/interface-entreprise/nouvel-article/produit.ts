import { Entreprise } from "src/app/new-entreprise/entreprise";

export class Produit {
    public skuCode: string;
    public description : string;
    public prix : number;
    public quantite : number;
    public entreprise : Entreprise;

    constructor(){
        this.skuCode = "";
        this.description = "";
        this.prix = 0;
        this.quantite = 0;
        this.entreprise = new Entreprise();
    }
}