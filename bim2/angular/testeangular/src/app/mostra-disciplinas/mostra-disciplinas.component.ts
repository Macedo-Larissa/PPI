import { Component } from '@angular/core';
import { Disciplina } from './disciplina';

@Component({
  selector: 'app-mostra-disciplinas',
  templateUrl: './mostra-disciplinas.component.html',
  styleUrls: ['./mostra-disciplinas.component.css']
})
export class MostraDisciplinasComponent {
  disciplinas: Disciplina[]

  constructor(){
    this.disciplinas = [
      new Disciplina('PPI', 'Bruno', 4, 120),
      new Disciplina('SOR', 'Rodrigo', 4, 160),
      new Disciplina('ESPANHOL', 'Érika', 4, 120),
      new Disciplina('BIOLOGIA', 'Thayse', 4, 160),
      new Disciplina('PDS', 'Álvaro', 4, 80),
    ]
  }
}
