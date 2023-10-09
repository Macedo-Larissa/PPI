import { Component } from '@angular/core';
import { AgendaService } from '../agenda.service';
// import { Contato } from '../adiciona-contato/contato';
import { Agenda } from '../adiciona-contato/agenda';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrls: ['./exibe-contatos.component.css']
})

export class ExibeContatosComponent {

  constructor(public agenda: AgendaService) {

  }

}
