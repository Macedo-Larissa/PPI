import { Contato } from "./contato";

export class Agenda {
    contatos: Contato[];

    constructor() {
        this.contatos = [];
    }

    adicionar(novo: Contato): boolean {
        if(!this.contatos.includes(novo)) {
            this.contatos.push(novo);
            return true;
        }
        return false;
    }

    obterTodos(): Contato[] {
        return this.contatos;
    }
}