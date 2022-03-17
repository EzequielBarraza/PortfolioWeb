import { Component, OnInit } from '@angular/core';
import {Experiencia} from "./Experiencia";
import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription } from 'rxjs';
import {Router, Routes} from '@angular/router'

 @Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  title: string ='Experiencia Laboral';
  showAddExperiencia: boolean = false;
  subscription?: Subscription;
   
  constructor(private uiService : UiService,
    private router: Router,
    private datosPortfolioService: DatosPortfolioService) 
    {this.subscription = this.uiService.onToggle().subscribe(value => this.showAddExperiencia = value) }
  ngOnInit(): void {
    //Like Promise
    this.datosPortfolioService.getExperiencia().subscribe((experiencia) => (this.experiencia = experiencia));
  }
  toggleAddExperiencia(){
    console.log("toggleaddexperiencia");
    this.uiService.toggleAddExperiencia();
  }
  deleteExperiencia(experiencia: Experiencia){
    this.datosPortfolioService.deleteExperiencia(experiencia)
    .subscribe(
      () => (
      this.experiencia = this.experiencia.filter((t) => {
      return t.id !== experiencia.id })
    ))
  }
  addExperiencia(experiencia: Experiencia) {
    this.datosPortfolioService.addExperiencia(experiencia).subscribe((experiencia) => ( this.experiencia.push(experiencia)
    ))
   }
   hasRoute(route:string){
    return this.router.url === route;
  }
}
