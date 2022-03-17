import { Component, OnInit } from '@angular/core';
import {AcercaDe} from "./AcercaDe"
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription } from 'rxjs';
import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";


@Component({
  selector: 'app-acerca_de',
  templateUrl: './acerca_de.component.html',
  styleUrls: ['./acerca_de.component.css']
})
export class Acerca_DeComponent implements OnInit {
title: string = 'Hola Soy Ezequiel Barraza'

acercaDe :AcercaDe [] = [];
showAddAcercaDe: boolean = false;
  subscription?: Subscription;
  constructor(private uiService : UiService,
    
    private datosPortfolioService: DatosPortfolioService) {this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAcercaDe = value) }

  ngOnInit(): void {//Like Promise
    this.datosPortfolioService.getAcercaDe().subscribe((acercaDe) => (this.acercaDe = acercaDe));
  }

  toggleAddAcercaDe(){
    console.log("toggle add acercaDe");
    this.uiService.toggleAddAcercaDe();
  }
  toggleAddEducacion(){
    console.log("toggleaddeducacion");
    this.uiService.toggleAddEducacion();
  }
  deleteAcercaDe(acercaDe: AcercaDe){
    this.datosPortfolioService.deleteAcercaDe(acercaDe)
    .subscribe(
      () => (
      this.acercaDe = this.acercaDe.filter((t) => {
      return t.id !== acercaDe.id })
    ))
  }
  addAcercaDe(acercaDe: AcercaDe){
    this.datosPortfolioService.addAcercaDe(acercaDe).subscribe((acercaDe) => ( this.acercaDe.push(acercaDe)
    ))
   }
}
