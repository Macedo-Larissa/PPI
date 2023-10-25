import { Component } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-listar-deputados',
  templateUrl: './listar-deputados.component.html',
  styleUrls: ['./listar-deputados.component.css']
})
export class ListarDeputadosComponent {
  deputados: Deputado[] = []

  constructor(private ds: DeputadoService) {
    this.ds.obterDeputados().subscribe(resposta => {
    this.deputados = resposta.dados
    })
  }
}
