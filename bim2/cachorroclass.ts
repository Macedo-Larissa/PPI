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
    private nome: string;
    private raca: Raça;
    private idade: number;

    constructor(nome: string, raca: Raça) { //onde recebe os valores
        this.nome = nome;
        this.raca = raca;
        this.idade = 0;
    }

    latir(quant: number) {
        let latido = '';
        for (let i = 0; i <quant; i++) {
            latido += 'Au';
        }
        return latido;
    }

    inserirNome(nm: string) {
        this.nome = nm;
    }

    obterNome(): string {
        return this.nome;
    }

    inserirIdade(id: number){
        if(id >= 0 && id <= 25){
            this.idade = id;
        }
    }

    obterIdade(): number {
        return this.idade;
    }
}
