import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../data/Educacion';
import {Experiencia} from '../data/Experiencia'
import { map } from 'rxjs/operators';
import { config } from '../data/config/Config';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>(config.baseUrl + "experiencia");
  }

  guardarNuevaExperiencia(experiencia:Experiencia): Observable<Experiencia> {
    return this.http.post<any>(config.baseUrl + "experiencia/create", experiencia);
  }

  modificarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(config.baseUrl + "experiencia/update", experiencia);
  }

  borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "experiencia/" + id);
  }
  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<any>(config.baseUrl + "educacion");
  }

  guardarNuevaEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<any>(config.baseUrl + "educacion/create", educacion);
  }

  modificarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(config.baseUrl + "educacion/update", educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "educacion/" + id);
  }
}
