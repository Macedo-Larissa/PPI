"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospedagem = exports.Aposento = exports.Hospede = void 0;
class Hospede {
    constructor(nome, cpf, tel, end) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = tel;
        this.endereco = end;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getTelefone() {
        return this.telefone;
    }
    getEndereco() {
        return this.endereco;
    }
}
exports.Hospede = Hospede;
class Aposento {
    constructor(numero, precoDiaria) {
        this.numero = numero;
        this.precoDiaria = precoDiaria;
    }
    getNumero() {
        return this.numero;
    }
    getPrecoDiaria() {
        return this.precoDiaria;
    }
}
exports.Aposento = Aposento;
class Hospedagem {
    constructor(aposento) {
        this.hospedes = [];
        this.aposento = aposento;
    }
    hospedar(hospede) {
        this.hospedes.push(hospede);
    }
    calcular_total(quant_diarias) {
        return this.aposento.getPrecoDiaria() * quant_diarias;
    }
}
exports.Hospedagem = Hospedagem;
