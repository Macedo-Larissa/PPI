import { Contato } from "./contato";

export class Agenda {
    contatos: Contato[];
    favoritos: Contato[];

    constructor() {
        this.contatos = [];
        this.favoritos = [];
    }

    adicionar(novo: Contato): boolean {
        if (!this.contatos.includes(novo)) {
            this.contatos.push(novo);
            return true;
        }
        return false;
    }

    obterTodos(): Contato[] {
        return this.contatos;
    }
    
    adicionarfav(novofav: Contato): boolean {
        if (!this.contatos.includes(novofav)) {
            this.contatos.push(novofav);
            return true;
        }
        return false;
    }

    obterTodosFav(): Contato[] {
        return this.favoritos;
    }
}