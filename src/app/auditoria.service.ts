import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auditoria } from './auditoria';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {


 //Esta url obtiene el listado de todas las auditorias en backend
  private baseURL = "http://localhost:8080/auditorias/traer"
  private baseUrl2 ="http://localhost:8080/auditorias/crear"
  private baseUrl3 = "http://localhost:8080/auditorias/actualizar"
  private baseUrl4 = "http://localhost:8080/auditorias/borrar"
  private baseUrl5 = "http://localhost:8080/auditorias/traerpornombre"

  constructor(private httpClient : HttpClient) { }

  obtenerListaAuditorias():Observable<Auditoria[]>{
    return this.httpClient.get<Auditoria[]>(`${this.baseURL}`);
  }

  guardarAuditoria(auditoria:Auditoria): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl2}`,auditoria)
  }
  actualizarEmpleado(id:number,auditoria:Auditoria):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`,auditoria)
  }
  obtenerAuditoriaporid(nombre:string,auditoria:Auditoria):Observable<Object>{
    return this.httpClient.get<Auditoria>(`${this.baseUrl3}/${nombre}`)
  }
  eliminarAuditorio(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl4}/${id}`)
  }
  }


