export class Contato {
    nome: string;
    telefone: number;
    email: string;
    aniversario: string;
    tipo: string;

    constructor(nm: string, tel: number, email: string, niver: string, tp: string){
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

    alteraraniversario(niver: string) {
        this.aniversario = niver;
    }

    obteraniversario(): string {
        return this.aniversario;
    }

    alterartipo(tp: string){
        this.tipo = tp;
    }

    obtertipo(): string {
        return this.tipo;
    }
}