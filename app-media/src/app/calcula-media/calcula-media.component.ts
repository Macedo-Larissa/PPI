import { Component } from '@angular/core';
import { Nota } from './nota (1)';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent {

  boletim: Nota;
  resultado: string;

  constructor() {
    this.boletim = new Nota(0, 0, 0, 0);
    this.resultado = '';
  }

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number,) {
    this.boletim.alterarBim1(b1);
    this.boletim.alterarBim2(b2);
    this.boletim.alterarBim3(b3);
    this.boletim.alterarBim4(b4);
    
    let mp = this.boletim.calcularMédiaParcial();
    let sit = this.boletim.obterSituação();

    this.resultado = `${sit} com média parcial ${mp}.`;

  }
}
