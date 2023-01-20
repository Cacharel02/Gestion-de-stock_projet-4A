export class Entreprise {
    public id: number;
    public nom: string;
    public adresse : string;
    public email : string;
    public fond : number;

    

    constructor(){
        this.id = 0;
        this.nom = "";
        this.adresse = "";
        this.email = "";
        this.fond = 0;
    }
}