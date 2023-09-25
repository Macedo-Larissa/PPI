import { Component } from '@angular/core';
import { Agenda } from './agenda';
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  agenda: Agenda;

  constructor(){
    this.agenda = new Agenda();
  }

  adicionarNovo(nome: string, telefone: number, email: string, aniversario: string, tipo: string) {
    const c = new Contato(nome, telefone, email, aniversario, tipo);
    this.agenda.adicionar(c);
  }
}
