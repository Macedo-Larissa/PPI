import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../adiciona-contato/contato';


@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrls: ['./exibe-contatos.component.css']
})

export class ExibeContatosComponent implements OnInit {

  todosContatos: Contato[];

  constructor(public agendaService: AgendaService){
    this.todosContatos = [];
  }

  ngOnInit() {
    this.todosContatos = this.agendaService.obterTodos();
  }
}
