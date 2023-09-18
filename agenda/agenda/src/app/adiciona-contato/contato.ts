export class Contato {
    private nome: string;
    private telefone: number;
    private email: string;
    private aniversario: Date;
    private tipo: string;

    constructor(nm: string, tel: number, email: string, niver: Date, tp: string){
        this.nome = nm;
        this.telefone = tel;
        this.email = email;
        this.aniversario = niver;
        this.tipo = tp;
    }

    alterarnome(nm: string) {
        this.nome = nm;
    }

    obternome(): string {
        return this.nome;
    }

    alterartelefone(tel: number) {
        this.telefone = tel;
    }

    obtertelefone(): number {
        return this.telefone;
    }

    alteraremail(email: string) {
        this.email = email;
    }

    obteremail(): string {
        return this.email;
    }

    alteraraniversario(niver: Date) {
        this.aniversario = niver;
    }

    obteraniversario(): Date {
        return this.aniversario;
    }

    alterartipo(tp: string){
        this.tipo = tp;
    }

    obtertipo(): string {
        return this.tipo;
    }
}