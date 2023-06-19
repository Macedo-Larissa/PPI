export class Nota {
    private bim1: number;

    constructor() {
        this.bim1 = 0;
    }

    modificarBim1(n: number) {
        if(n >= 0 && n <= 100) {
            this.bim1 = n;
        }
    }

}