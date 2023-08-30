import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})

export class TurmaComponent implements OnInit {
  mensagem: string;
  
  constructor() {
    this.mensagem = '';
  }

  ngOnInit() {}

  alterarMensagem(n:string) {
    this.mensagem = `Seja bem-vindo, ${n}!`;
  }
}
