import { Injectable } from '@angular/core';
import {Educacion} from "../componentes/educacion/Educacion";
import {Experiencia} from "../componentes/experiencia/Experiencia";
import {AcercaDe} from "../componentes/acerca_de/AcercaDe";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http'
import {Skill} from "../componentes/skills/Skills";


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
  }

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {
  private apiUrlacercaDe ='http://localhost:5000/acercaDe';
  private apiUrledu ='http://localhost:5000/educacion';
  private apiUrlexp ='http://localhost:5000/experiencia';
  private apiUrlskill ='http://localhost:5000/skill';

  constructor(private http: HttpClient) { }
  getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiUrledu);
  }  
  
  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrlexp);
  }
  getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrlskill);
  }
  getAcercaDe(): Observable<AcercaDe[]> {
    return this.http.get<AcercaDe[]>(this.apiUrlacercaDe);
  }
  deleteEducacion(educacion: Educacion):Observable<Educacion> {
    const url =`${this.apiUrledu}/${educacion.id}`
    
    return this.http.delete<Educacion>(url);
  }
  deleteExperiencia(experiencia: Experiencia):Observable<Experiencia> {
    const url =`${this.apiUrlexp}/${experiencia.id}`
    
    return this.http.delete<Experiencia>(url);
  }

  deleteSkill(skill: Skill):Observable<Skill> {
    const url =`${this.apiUrlskill}/${skill.id}`
    
    return this.http.delete<Skill>(url);
  }
  deleteAcercaDe(acercaDe: AcercaDe):Observable<AcercaDe> {
    const url =`${this.apiUrlacercaDe}/${acercaDe.id}`
    
    return this.http.delete<AcercaDe>(url);
  }

  addEducacion(educacion:Educacion): Observable<Educacion>{ 
    return this.http.post<Educacion>(this.apiUrledu, educacion, httpOptions);
  }
  addExperiencia(experiencia: Experiencia): Observable<Experiencia>{ 
    return this.http.post<Experiencia>(this.apiUrlexp, experiencia, httpOptions);
  }
  addSkill(skill: Skill): Observable<Skill>{ 
    return this.http.post<Skill>(this.apiUrlskill, skill, httpOptions);
  }
  addAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe>{ 
    return this.http.post<AcercaDe>(this.apiUrlacercaDe, acercaDe, httpOptions);
  }
  }

