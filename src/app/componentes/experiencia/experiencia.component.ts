import { Component, OnInit } from '@angular/core';
import {Experiencia} from "./Experiencia"
import { EXPERIENCIA } from "./mock-experiencia";
import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";

 @Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
 
  title='Experiencia Laboral';
  
   
  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    //Like Promise
    this.datosPortfolioService.getExperiencia().subscribe((experiencia) => (this.experiencia = experiencia));
  }
  toggleaddexperiencia(){
    console.log("toggleaddexperiencia");
  }
  deleteExperiencia(experiencia: Experiencia){
    this.datosPortfolioService.deleteExperiencia(experiencia)
    .subscribe(
      () => (
      this.experiencia = this.experiencia.filter((t) => {
      return t.id !== experiencia.id })
    ))
  }
}
