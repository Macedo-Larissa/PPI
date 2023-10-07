export class Contato {
    private nome: string;
    private telefone: number;
    private email: string;
    private aniversario: string;
    private tipo: string;
    private favorito: boolean;

    constructor(nm: string, tel: number, email: string, niver: string, tp: string){
        this.nome = nm;
        this.telefone = tel;
        this.email = email;
        this.aniversario = niver;
        this.tipo = tp;
        this.favorito = false;
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

    alterarfavorito(value: boolean) {
        this.favorito = value;
    }

    obterfavorito(): boolean {
        return this.favorito;
    }
    
}