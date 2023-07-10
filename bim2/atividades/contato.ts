export class Contato {
    private nome: string;
    private email: string;
    private telefone: number;

    constructor(nm: string, email: string, tel: number) {
        this.alterarnome(nm);
        this.alteraremail(email);
        this.alterartelefone(tel);
    }
    alterarnome(nm: string) {
        this.nome = nm;
    }

    obternome(): string {
        return this.nome;
    }

    alteraremail(email: string) {
        this.email = email;
    }
    obteremail(): string {
        return this.email;
    }

    alterartelefone(tel: number) {
        this.telefone = tel;
    }

    obtertelefone(): number {
        return this.telefone;
    }
}
