export enum Raça {
    GOLDEN = 'Golden', 
    HUSKY = 'Husky', 
    SALSICHA = 'Salsicha', 
    LABRADOR = 'Labrador',
    CARAMELO = 'Caramelo', 
    PASTORALEMÃO = 'Pastor Alemão', 
    ROTTWEILER = 'Rottweiler',
    PITBULL = 'Pit Bull',
    POODLE = 'Poodle'
}

export class Cachorro {
    nome: string;
    raca: Raça;
    idade: number;

    constructor(nm: string, raca: Raça) {
        this.nome = nm;
        this.raca = raca;
        this.idade = 0;
    }
}