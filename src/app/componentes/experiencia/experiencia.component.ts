import { Component, OnInit } from '@angular/core';
import {Experiencia} from "./Experiencia"
import { EXPERIENCIA } from "./mock-experiencia";


 @Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = EXPERIENCIA;
  title='Experiencia Laboral';
  
   
  constructor() { }

  ngOnInit(): void {
  }

}
