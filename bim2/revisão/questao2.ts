export class Hospede {
    private nome: string;
    private cpf: string;
    private telefone: string;
    private endereco: string;

    constructor(nome: string, cpf: string, tel: string, end: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = tel;
        this.endereco = end;
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getTelefone(): string {
        return this.telefone;
    }

    getEndereco(): string {
        return this.endereco;
    }
}

export class Aposento {
    private numero: number;
    private precoDiaria: number;

    constructor(numero: number, precoDiaria: number) {
        this.numero = numero;
        this.precoDiaria = precoDiaria;
    }

    getNumero(): number {
        return this.numero;
    }

    getPrecoDiaria(): number {
        return this.precoDiaria;
    }
}

export class Hospedagem {
    private hospedes: Hospede[];
    private aposento: Aposento;

    constructor(aposento: Aposento) {
        this.hospedes = [];
        this.aposento = aposento;
    }

    hospedar(hospede: Hospede): void {
        this.hospedes.push(hospede);
    }

    calcular_total(quant_diarias: number): number {
        return this.aposento.getPrecoDiaria() * quant_diarias;
    }
}