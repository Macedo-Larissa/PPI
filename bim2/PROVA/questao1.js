"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(dd, mm, aa) {
        this.modificarDia(dd);
        this.modificarMes(mm);
        this.modificarAno(aa);
    }
    modificarDia(dia) {
        if (dia >= 1 && dia <= 31) {
            this.dia = dia;
        }
        else {
            this.dia = 1;
        }
    }
    obterDia() {
        return this.dia;
    }
    modificarMes(mm) {
        if (mm >= 1 && mm <= 12) {
            this.mes = mm;
        }
        else {
            this.mes = 1;
        }
    }
    obterMes() {
        return this.mes;
    }
    modificarAno(aa) {
        const anoAtual = new Date().getFullYear();
        if (aa >= anoAtual) {
            this.ano = aa;
        }
        else {
            this.ano = anoAtual;
        }
    }
    obterAno() {
        return this.ano;
    }
    obterData() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}
exports.Data = Data;
