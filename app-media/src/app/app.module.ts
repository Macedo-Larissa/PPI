import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculaMediaComponent } from './calcula-media/calcula-media.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculaMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
