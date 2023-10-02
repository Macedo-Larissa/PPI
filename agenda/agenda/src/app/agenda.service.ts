import { Injectable } from '@angular/core';
import { Contato } from './adiciona-contato/contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

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
