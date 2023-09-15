import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAuditorioComponent } from './lista-auditorio/lista-auditorio.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarAuditoriaComponent } from './registrar-auditoria/registrar-auditoria.component';
import { FormsModule } from '@angular/forms';
import { ActualizarAuditoriaComponent } from './actualizar-auditoria/actualizar-auditoria.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAuditorioComponent,
    RegistrarAuditoriaComponent,
    ActualizarAuditoriaComponent
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
