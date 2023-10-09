import { Injectable } from '@angular/core';
import { Contato } from './adiciona-contato/contato';

@Injectable({
    providedIn: 'root'
})

export class AgendaService {

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

    adicionarfav(novofav: Contato): boolean {
        if (!this.favoritos.includes(novofav)) {
            this.favoritos.push(novofav)
            return true
        }
        return false
    }

    obterTodos(): Contato[] {
        return this.contatos;
    }

    obterTodosFav(): Contato[] {
        return this.favoritos
    }
}
