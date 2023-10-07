import { Injectable } from '@angular/core';
import { Contato } from './adiciona-contato/contato';

@Injectable({
    providedIn: 'root';
})

export class AgendaService {

    contatos: Contato[];

    constructor() {
        this.contatos = [];
    }

    existe(ct: Contato): boolean {
        return false
    }

    adicionar(novo: Contato): boolean {
        if (!this.contatos.includes(novo)) {
            this.contatos.push(novo);
            return true;
        }
        return false;
    }

    obterFavoritos(): Contato[] {
        return this.contatos;
    }

    marcarComoFavorito(contato: Contato) {
        const index = this.contatos.findIndex(c => c === contato);
        if (index !== -1) {
            this.contatos[index].alterarfavorito(true);
        }
    }

    obterTodos(): Contato[] {
        return this.contatos;
    }

    obterContatoPeloTelefone(tel: string): Contato | undefined{
        return this.contatos.find(c => c.obtertelefone() === tel);
    }
}
