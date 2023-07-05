export class Contato {
    private nome: string;
    private email: string;
    private telefone: number;

    constructor (nm: string, eml: string, tel: number) {
        this.nome = nm;
        this.email = eml;
        this.telefone = tel;
    }
}