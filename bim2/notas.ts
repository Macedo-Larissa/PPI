export enum Situação {
    CURSANDO  = 'Cursando', 
    APROVADO  = 'Aprovado',
    REPROVADO = 'Reprovado',
    AVFINAL   = 'Avaliação Final'
}
export class Nota {
    private bim1: number = 0;
    private bim2: number = 0;
    private bim3: number = 0;
    private bim4: number = 0;

     constructor(b1: number, 
                b2: number, 
                b3: number, 
                b4: number) {
        this.alterarBim1(b1);
        this.alterarBim2(b2);
        this.alterarBim3(b3);
        this.alterarBim4(b4);
    }
    alterarBim1(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim1 = n;
            return true;
        } 
        return false;
    }

    obterBim1(): number {
        return this.bim1;
    }

    alterarBim2(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim2 = n;
            return true;
        }
        return false;

    }
    obterBim2(): number {
        return this.bim2;
    }
    
    alterarBim3(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim3 = n;
            return true;

        }
        return false;
    }

    obterBim3(): number {
        return this.bim3;
    }

    alterarBim4(n: number): boolean {
        if (n >= 0 && n <= 100) {
            this.bim4 = n;
            return true;
        }
        return false;
    }

    obterBim4(): number {
        return this.bim4;
    }

    alterarTodas(b1: number, b2: number, 
                 b3: number, b4: number) {
            this.alterarBim1(b1);
            this.alterarBim2(b2);
            this.alterarBim3(b3);
            this.alterarBim4(b4);
    }

    alterarNotaAvFinal(nav: number): boolean {
        if (nav >= 0 && nav <= 100) {
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

    calcularMediaFinal(nav: number): number {
        if (this.calcularMediaParcial() < 60) {
            return (nav + this.calcularMediaParcial()) / 2;
        } else {
            this.situação = Situação.REPROVADO;
        }
        return mf;
    }
}
