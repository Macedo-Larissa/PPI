"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
class Voo {
    constructor(data, numero) {
        this.data = data;
        this.numero = numero;
        this.reservas = 0;
    }
    validarReservas(reservas) {
        if (this.reservas >= 0 && this.reservas <= 8) {
            this.reservas++;
            return true;
        }
        return false;
    }
    ocupado() {
    }
    quantidadeOcupados() {
    }
}
exports.Voo = Voo;
