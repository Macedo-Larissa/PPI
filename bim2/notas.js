"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = exports.Situação = void 0;
var Situação;
(function (Situação) {
    Situação["CURSANDO"] = "Cursando";
    Situação["APROVADO"] = "Aprovado";
    Situação["REPROVADO"] = "Reprovado";
    Situação["AVFINAL"] = "Avalia\u00E7\u00E3o Final";
})(Situação || (exports.Situação = Situação = {}));
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
        this.avFinal = undefined;
        this.situação = Situação.CURSANDO;
    }
    alterarBim1(n) {
        if (n >= 0 && n <= 100) {
            this.bim1 = n;
            return true;
        }
        return false;
    }
    obterBim1() {
        return this.bim1;
    }
    alterarBim2(n) {
        if (n >= 0 && n <= 100) {
            this.bim2 = n;
            return true;
        }
        return false;
    }
    obterBim2() {
        return this.bim2;
    }
    alterarBim3(n) {
        if (n >= 0 && n <= 100) {
            this.bim3 = n;
            return true;
        }
        return false;
    }
    obterBim3() {
        return this.bim3;
    }
    alterarBim4(n) {
        if (n >= 0 && n <= 100) {
            this.bim4 = n;
            return true;
        }
        return false;
    }
    obterBim4() {
        return this.bim4;
    }
    alterarTodas(b1, b2, b3, b4) {
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
    }
    alterarNotaAvFinal(nav) {
        if (nav >= 0 && nav <= 100) {
            this.avFinal = nav;
            return true;
        }
        return false;
    }
    obterNotaAvaliaçãoFinal() {
        return this.avFinal;
    }
    obterSituação() {
        return this.situação;
    }
    calcularMédiaParcial() {
        const mp = (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10;
        if (mp >= 60) {
            this.situação = Situação.APROVADO;
        }
        else if (mp >= 10) {
            this.situação = Situação.AVFINAL;
        }
        else {
            this.situação = Situação.REPROVADO;
        }
        return mp;
    }
    /** Média pós avaliação final
     * @param nav - nota da avaliação final
     *
     * @return A média final do estudante (mp + nav) / 2;
    */
    calcularMédiaFinal(nav = undefined) {
        let mp = this.calcularMédiaParcial();
        let mf = mp;
        if (mp < 60 && nav != undefined) {
            this.alterarNotaAvFinal(nav);
            mf = (mp + nav) / 2;
        }
        if (mf >= 60) {
            this.situação = Situação.APROVADO;
        }
        else {
            this.situação = Situação.REPROVADO;
        }
        return mf;
    }
}
exports.Nota = Nota;
