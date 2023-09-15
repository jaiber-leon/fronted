import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Auditoria } from '../auditoria';
import { AuditoriaService } from '../auditoria.service';


@Component({
  selector: 'app-lista-auditorio',
  templateUrl: './lista-auditorio.component.html',
  styleUrls: ['./lista-auditorio.component.css']
})
export class ListaAuditorioComponent {

  auditoria:Auditoria[];

  constructor(private auditoriaServicio:AuditoriaService, private router:Router){}
  ngOnInit(): void{
  this.obtenerAuditorias();
  
  
  }
  private obtenerAuditorias(){
    this.auditoriaServicio.obtenerListaAuditorias().subscribe(dato =>{
      this.auditoria = dato;
    });
  }
   actualizarAuditoria(id:number){
    this.router.navigate(['actualizar-auditorio',id]);


  }
   eliminarAuditoria(id:number){
    this.auditoriaServicio.eliminarAuditorio(id).subscribe(dato=>{
      this.obtenerAuditorias;
    })
  }

}
