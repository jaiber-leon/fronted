import { Component, OnInit } from '@angular/core';
import { Auditoria} from '../auditoria';
import { AuditoriaService } from '../auditoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-auditoria',
  templateUrl: './registrar-auditoria.component.html',
  styleUrls: ['./registrar-auditoria.component.css']
})
export class RegistrarAuditoriaComponent {

  auditoria : Auditoria = new Auditoria

  constructor(private auditoriaServicio:AuditoriaService, private router:Router){}

  
  ngOnInit(): void{
  }
  guardarAuditorio(){
    this.auditoriaServicio.guardarAuditoria(this.auditoria).subscribe(dato =>{
     console.log(dato); 
     this.irALAListaDeAuditorias();
    },error => console.log(error))
  }
    
  irALAListaDeAuditorias(){
    this.router.navigate(['/auditoria'])
  }
  
  onSubmit(){
    this.guardarAuditorio();
  }
  }

