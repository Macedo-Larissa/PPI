import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarDeputadosComponent } from './listar-deputados/listar-deputados.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaDeputadoComponent } from './busca-deputado/busca-deputado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarDeputadosComponent,
    BuscaDeputadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
