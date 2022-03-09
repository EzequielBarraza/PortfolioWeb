import { Injectable } from '@angular/core';
import {Educacion} from "../componentes/educacion/Educacion";
import { EDUCACION } from "../componentes/educacion/mock-educacion";
import {Experiencia} from "../componentes/experiencia/Experiencia";
import { EXPERIENCIA } from "../componentes/experiencia/mock-experiencia";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {
  private apiUrledu ='http://localhost:5000/educacion';
  private apiUrlexp ='http://localhost:5000/experiencia';

  constructor(private http: HttpClient) { }
  getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiUrledu);
  }  
  
  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrlexp);
  }
  deleteEducacion(educacion: Educacion):Observable<Educacion> {
    const url =`${this.apiUrledu}/${educacion.id}`
    
    return this.http.delete<Educacion>(url);
  }
  deleteExperiencia(experiencia: Experiencia):Observable<Experiencia> {
    const url =`${this.apiUrlexp}/${experiencia.id}`
    
    return this.http.delete<Experiencia>(url);
  }
  }

