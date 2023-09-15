import { Component, OnInit } from '@angular/core';
import { Auditoria } from '../auditoria';

@Component({
  selector: 'app-lista-auditorio',
  templateUrl: './lista-auditorio.component.html',
  styleUrls: ['./lista-auditorio.component.css']
})
export class ListaAuditorioComponent {

  auditoria:Auditoria[];

  constructor(){}
  ngOnInit(): void{
    this.auditoria =[{
    "id":1,
    "nombre":"auditoria 1",
    "entedecontrol":"cafeteros norte",
    "fechadeinicio": "2022-05-16",
    "fechadefinalizacion": "2022-5-10",
    "estado": "activa"
  },
  ];
  }

}
