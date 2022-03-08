import { Component, OnInit } from '@angular/core';
import {Educacion} from "./Educacion"
import { EDUCACION } from "./mock-educacion";

import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion :Educacion [] = [];
title='Educación';

  constructor(
    private datosPortfolioService: DatosPortfolioService
  ) { }

  ngOnInit(): void {
    //Like Promise
    this.datosPortfolioService.getEducacion().subscribe((educacion) => (this.educacion = educacion));
  }
toggleaddeducacion(){
  console.log("toggleaddeducacion");
}
}
