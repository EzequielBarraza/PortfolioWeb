import { Injectable } from '@angular/core';
import {Educacion} from "../componentes/educacion/Educacion";
import { EDUCACION } from "../componentes/educacion/mock-educacion";
import {Experiencia} from "../componentes/experiencia/Experiencia";
import { EXPERIENCIA } from "../componentes/experiencia/mock-experiencia";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http'
import {Skill} from "../componentes/skills/Skills";
import { SKILL } from "../componentes/skills/mock-skills";

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
  }

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {
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
  addEducacion(educacion:Educacion): Observable<Educacion>{ 
    return this.http.post<Educacion>(this.apiUrledu, educacion, httpOptions);
  }
  
  }

