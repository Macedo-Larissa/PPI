"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
class Nota {
    constructor(b1, b2, b3, b4) {
        this.bim1 = 0;
        this.bim2 = 0;
        this.bim3 = 0;
        this.bim4 = 0;
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
    }
    alterarBim1(n1) {
        if (n1 >= 0 && n1 <= 100) {
            this.bim1 = n1;
            return true;
        }
        return false;
    }
    obterBim1() {
        return this.bim1;
    }
    alterarBim2(n2) {
        if (n2 >= 0 && n2 <= 100) {
            this.bim2 = n2;
            return true;
        }
        return false;
    }
    obterBim2() {
        return this.bim2;
    }
    alterarBim3(n3) {
        if (n3 >= 0 && n3 <= 100) {
            this.bim3 = n3;
            return true;
        }
        return false;
    }
    obterBim3() {
        return this.bim3;
    }
    alterarBim4(n4) {
        if (n4 >= 0 && n4 <= 100) {
            this.bim4 = n4;
            return true;
        }
        return false;
    }
    obterBim4() {
        return this.bim4;
    }
    calcularMediaParcial() {
        return (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10;
    }
    /** Média final da disciplina
     *
     * Caso o estudante obtenha média parcial maior ou igual a 60 a média
     * final será a média parcial (mp). Caso contrário a média final será
     * calculada pela fórmula (mp + nav) / 2.
     *
     * @param nav - nota da avaliação final.
     * @return - a média final da disciplina.
     */
    calcularMediaFinal(nav) {
        if (this.calcularMediaParcial() < 60) {
            return (nav + this.calcularMediaParcial()) / 2;
        }
        else {
            return this.calcularMediaParcial();
        }
    }
}
exports.Nota = Nota;
