import { Component, OnInit } from '@angular/core';
import {Educacion} from "./Educacion"
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription } from 'rxjs';
import {Router, Routes} from '@angular/router'

import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion :Educacion [] = [];
title: string ='Educación';
showAddEducacion: boolean = true;
  subscription?: Subscription;
  constructor(private uiService : UiService,
    private router: Router,
    private datosPortfolioService: DatosPortfolioService
  ) {this.subscription = this.uiService.onToggle().subscribe(value => this.showAddEducacion = value) }

  ngOnInit(): void {
    //Like Promise
    this.datosPortfolioService.getEducacion().subscribe((educacion) => (this.educacion = educacion));
  }
toggleAddEducacion(){
  console.log("toggleaddeducacion");
  this.uiService.toggleAddEducacion();
}
deleteEducacion(educacion: Educacion){
  this.datosPortfolioService.deleteEducacion(educacion)
  .subscribe(
    () => (
    this.educacion = this.educacion.filter((t) => {
    return t.id !== educacion.id })
  ))
}
addEducacion(educacion:Educacion) {
  this.datosPortfolioService.addEducacion(educacion).subscribe((educacion) => ( this.educacion.push(educacion)
  ))
 }
 hasRoute(route:string){
  return this.router.url === route;
}
}
