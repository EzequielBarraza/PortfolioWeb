import { Injectable } from '@angular/core';
import {Educacion} from "../componentes/educacion/Educacion";
import { EDUCACION } from "../componentes/educacion/mock-educacion";
import {Experiencia} from "../componentes/experiencia/Experiencia";
import { EXPERIENCIA } from "../componentes/experiencia/mock-experiencia";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {

  constructor() { }
  getEducacion(): Observable<Educacion[]> {
    const educacion = of(EDUCACION);
    return educacion  
  };
  getExperiencia(): Observable<Experiencia[]> {
    const experiencia = of(EXPERIENCIA);
    return experiencia
  };
}
