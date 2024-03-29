import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MostraDisciplinasComponent } from './mostra-disciplinas/mostra-disciplinas.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    MostraDisciplinasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
