"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
class Voo {
    constructor(data, num) {
        this.data = data;
        this.numero = num;
        this.reservas = [false, false, false, false, false, false, false, false];
    }
    ocupado(num) {
        if (num >= 0 && num < this.reservas.length) {
            return this.reservas[num];
        }
    }
    quantidadeOcupados() {
        let quant = 0;
        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i] == true) {
                quant++;
            }
        }
        return quant;
    }
    reservar(num) {
        if (!this.ocupado(num)) {
            this.reservas[num] = true;
            return true;
        }
        return false;
    }
}
exports.Voo = Voo;
