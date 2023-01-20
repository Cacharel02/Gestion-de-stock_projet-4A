import { LigneCmdClient } from "./commande-client/ligneCmdClient";

export class CommandeClient {
    public numero : string;
    public lignes : LigneCmdClient[];
    

    constructor(){
        this.numero = "";
        this.lignes = [];
    }
}