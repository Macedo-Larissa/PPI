"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = 2023;
    }
    validarDia(dia) {
        if (dia >= 1 && dia <= 31) {
            return true;
        }
        return false;
    }
    modificarDia(dia) {
        this.dia = dia;
    }
    obterDia() {
        return this.dia;
    }
    validarMes(mes) {
        if (mes >= 1 && mes <= 12) {
            return true;
        }
        return false;
    }
    modificarMes(mes) {
        this.mes = mes;
    }
    obterMes() {
        return this.mes;
    }
    validarAno(dia) {
        if (dia >= 2023) {
            return true;
        }
        return false;
    }
    modificarAno(ano) {
        this.ano = ano;
    }
    obterAno() {
        return this.ano;
    }
    obterData() {
        return (`${this.dia}/${this.mes}/${this.ano}.`);
    }
}
exports.Data = Data;
