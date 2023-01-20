export class Client {
    public id : number;
    public nom : string;
    public email : string
    public codeClient: string;
    public password : string;

    constructor(){
        this.id = 0;
        this.nom = "";
        this.email = "";
        this.codeClient = "";
        this.password = "";
    }
}