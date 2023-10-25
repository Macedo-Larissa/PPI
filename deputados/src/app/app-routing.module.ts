import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
import { ListarDeputadosComponent } from './listar-deputados/listar-deputados.component';

const routes: Routes = [
  {path: 'inicio', component: ListarDeputadosComponent},
  {path: 'buscar', component: BuscaDeputadoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
