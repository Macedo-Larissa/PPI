"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
class Nota {
    constructor() {
        this.bim1 = 0;
    }
    modificarBim1(n) {
        if (n >= 0 && n <= 100) {
            this.bim1 = n;
        }
    }
}
exports.Nota = Nota;
