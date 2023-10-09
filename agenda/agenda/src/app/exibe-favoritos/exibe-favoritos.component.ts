import { Component } from '@angular/core';
import { Agenda } from '../adiciona-contato/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrls: ['./exibe-favoritos.component.css']
})
export class ExibeFavoritosComponent {
  
  constructor(public agenda: AgendaService) {

  }
}
