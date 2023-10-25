import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  API_URL = 'https://dadosabertos.camara.leg.br/api/v2'

  constructor(private http: HttpClient) { }

  obterDeputados(): Observable<any> {
    return this.http.get(`${this.API_URL}/deputados`)
  }

  obterDeputadoPorNome(nome:string): Observable<any> {
    return this.http.get(`${this.API_URL}/deputados?nome=${nome}`)
  }
}
