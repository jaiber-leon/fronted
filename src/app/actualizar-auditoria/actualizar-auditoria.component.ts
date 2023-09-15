import { Component } from '@angular/core';
import { Auditoria } from '../auditoria';
import { AuditoriaService } from '../auditoria.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-actualizar-auditoria',
  templateUrl: './actualizar-auditoria.component.html',
  styleUrls: ['./actualizar-auditoria.component.css']
})
export class ActualizarAuditoriaComponent {
  idAuditoria:number;
  auditoria:Auditoria =new Auditoria();
  constructor(private auditoriaService:AuditoriaService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void{
  
    
  }
  
    
  irALAListaDeAuditorias(){
    this.router.navigate(['/auditoria'])
  }
  
  onSubmit(){
    this,this.auditoriaService.actualizarAuditoria(this.idAuditoria,this.auditoria).subscribe(dato => {
      this.irALAListaDeAuditorias();
    },error => console.log(error));
  }

  
  


}
