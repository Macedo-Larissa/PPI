import { Component } from '@angular/core';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-busca-deputado',
  templateUrl: './busca-deputado.component.html',
  styleUrls: ['./busca-deputado.component.css']
})
export class BuscaDeputadoComponent {

  deputados: any[] = [];

  constructor(private ds: DeputadoService){

  }

  buscarPorNome(nome: string){
    this.ds.obterDeputadoPorNome(nome).subscribe((res: any ) => { this.deputados = res.dados},);
  }
}
