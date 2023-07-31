export class Elevador {
    private capacidade: number;
    private totalAndares: number;
    private andarAtual: number;
    private quantidadePessoas: number;
    private portaAberta: boolean;

    constructor(capacidade: number, totalAndares: number) {
        this.capacidade = capacidade;
        this.totalAndares = totalAndares;
        this.andarAtual = 0;
        this.quantidadePessoas = 0;
        this.portaAberta = false;
    }

    entrar(numPessoas: number): void {
        if (this.portaAberta && this.quantidadePessoas + numPessoas <= this.capacidade) {
            this.quantidadePessoas += numPessoas;
            this.portaAberta = false;
            console.log(`${numPessoas} pessoa(s) entraram no elevador. Agora temos ${this.quantidadePessoas} pessoa(s) dentro.`);
        }
    }

    sair(numPessoas: number): void {
        if (this.portaAberta && this.quantidadePessoas > 0) {
            const numPessoasSairam = Math.min(numPessoas, this.quantidadePessoas);
            this.quantidadePessoas -= numPessoasSairam;
            this.portaAberta = false;
            console.log(`${numPessoasSairam} pessoa(s) saíram do elevador. Agora temos ${this.quantidadePessoas} pessoa(s) dentro.`);
        }
    }

    subir(): void {
        if (this.andarAtual < this.totalAndares - 1) {
            this.andarAtual++;
            console.log(`Elevador subiu para o andar ${this.andarAtual}.`);
        }
    }

    descer(): void {
        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(`Elevador desceu para o andar ${this.andarAtual}.`);
        }
    }

    abrirPorta(): void {
        this.portaAberta = true;
        console.log("Porta do elevador foi aberta.");
    }

    fecharPorta(): void {
        this.portaAberta = false;
        console.log("Porta do elevador foi fechada.");
    }
}
