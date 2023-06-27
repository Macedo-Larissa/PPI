export class Nota {
    private bim1: number = 0;
    private bim2: number = 0;
    private bim3: number = 0;
    private bim4: number = 0;
    private avFinal: number | undefined; 

    constructor(b1: number, b2: number, b3: number, b4: number,) {
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
        this.avFinal = undefined;
    }

    alterarBim1(n1: number): boolean {
        if (n1 >= 0 && n1 <= 100) {
            this.bim1 = n1;
            return true;
        }
        return false;
    }

    obterBim1(): number {
        return this.bim1;
    }

    alterarBim2(n2: number): boolean {
        if (n2 >= 0 && n2 <= 100) {
            this.bim2 = n2;
            return true;
        }
        return false;
    }

    obterBim2(): number {
        return this.bim2;
    }

    alterarBim3(n3: number): boolean {
        if (n3 >= 0 && n3 <= 100) {
            this.bim3 = n3;
            return true;
        }
        return false;
    }

    obterBim3(): number {
        return this.bim3;
    }

    alterarBim4(n4: number): boolean {
        if (n4 >= 0 && n4 <= 100) {
            this.bim4 = n4;
            return true;
        }
        return false;
    }

    obterBim4(): number {
        return this.bim4;
    }

    calcularMediaParcial(){
        return (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10;
    }

    obterNotaAvFinal(): number | undefined {
        return this.avFinal;
    }

    alterarNotaAvFinal(nav: number): boolean {
        if (nav >=0 && nav <= 100) {
            this.avFinal = nav;
            return true;
        }
        return false;
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

    calcularMediaFinal(nav: number = undefined){
        let mp = this.calcularMediaParcial();
        this.alterarNotaAvFinal(nav);

        let mf = mp;

        if (mp < 60 && this.obterNotaAvFinal()) {
            return mf = (nav + mp) / 2;
        } else {
            return this.calcularMediaParcial();
        }
    }
}
