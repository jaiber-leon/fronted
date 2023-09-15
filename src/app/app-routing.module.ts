import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAuditorioComponent } from './lista-auditorio/lista-auditorio.component';
import { RegistrarAuditoriaComponent } from './registrar-auditoria/registrar-auditoria.component';

const routes: Routes = [
  {path: 'auditoria',component:ListaAuditorioComponent},
  {path:'',redirectTo:'auditoria',pathMatch:'full'},
  {path: 'registrar-auditoria',component : RegistrarAuditoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
