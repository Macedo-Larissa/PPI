"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elevador = void 0;
class Elevador {
    constructor(capacidade, totalAndares) {
        this.capacidade = capacidade;
        this.totalAndares = totalAndares;
        this.andarAtual = 0;
        this.quantidadePessoas = 0;
        this.portaAberta = false;
    }
    entrar(numPessoas) {
        if (this.portaAberta && this.quantidadePessoas + numPessoas <= this.capacidade) {
            this.quantidadePessoas += numPessoas;
            this.portaAberta = false;
            console.log(`${numPessoas} pessoa(s) entraram no elevador. Agora temos ${this.quantidadePessoas} pessoa(s) dentro.`);
        }
    }
    sair(numPessoas) {
        if (this.portaAberta && this.quantidadePessoas > 0) {
            const numPessoasSairam = Math.min(numPessoas, this.quantidadePessoas);
            this.quantidadePessoas -= numPessoasSairam;
            this.portaAberta = false;
            console.log(`${numPessoasSairam} pessoa(s) saíram do elevador. Agora temos ${this.quantidadePessoas} pessoa(s) dentro.`);
        }
    }
    subir() {
        if (this.andarAtual < this.totalAndares - 1) {
            this.andarAtual++;
            console.log(`Elevador subiu para o andar ${this.andarAtual}.`);
        }
    }
    descer() {
        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(`Elevador desceu para o andar ${this.andarAtual}.`);
        }
    }
    abrirPorta() {
        this.portaAberta = true;
        console.log("Porta do elevador foi aberta.");
    }
    fecharPorta() {
        this.portaAberta = false;
        console.log("Porta do elevador foi fechada.");
    }
}
exports.Elevador = Elevador;
// void: é utilizado para indicar que uma função não retorna nenhum valor
// tsc -w : comando para deixar automático
// node nome_do_doc.js : comando para testar o código
