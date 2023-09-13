import { Component } from '@angular/core';
import { Nota, Situação } from './nota (1)';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})

export class CalculaMediaComponent {

  boletim: Nota;
  resultado: string;
  mediaParcial: number;

  constructor() {
    this.boletim = new Nota(0, 0, 0, 0);
    this.resultado = '';
    this.mediaParcial = 0;
  }

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    this.boletim.alterarBim1(b1);
    this.boletim.alterarBim2(b2);
    this.boletim.alterarBim3(b3);
    this.boletim.alterarBim4(b4);

    let mp = this.boletim.calcularMédiaParcial();
    this.mediaParcial = mp;
    let sit = this.boletim.obterSituação();

    this.resultado = `${sit} com média  ${mp}.`;

  }

  calcularMediaFinal(naf: number) {

    let mf = this.boletim.calcularMédiaFinal(naf);
    let sit2 = this.boletim.obterSituação();

    this.resultado = `${sit2} com média  ${mf};`;
  }
  obterClasseSituacao() {
    if (this.boletim.obterSituação() ===
      Situação.APROVADO) {
      return 'bg-success';
    } else if (this.boletim.obterSituação() ===
      Situação.AVFINAL) {
      return 'bg-warning';
    } else if (this.boletim.obterSituação() ===
      Situação.REPROVADO) {
      return 'bg-danger';
    }
    return 'bg-secondary'
  }
}
