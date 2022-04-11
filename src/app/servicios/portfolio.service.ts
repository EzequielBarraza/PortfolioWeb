import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../data/Educacion';
import { map } from 'rxjs/operators';
import { config } from '../data/config/Config';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<any>(config.baseUrl + "educacion");
  }
  obtenerDatosEducacion2(): Educacion[] {
    return [
      {
        "id": 1,
        "title": "Programador Web Full Stack",
        "career":"Programación Web",
        "school": "Argentina Programa",
        "score":0,
        "start": "2021",
        "end": "2022"
      },
      {
        "id": 2,
        "title": "Sé Programar",
        "school": "Argentina Programa",
        "career": "Fundamentos de Programación",
        "score": 100,
        "start": "2021",
        "end":"2021"
      },
      {
        "id": 3,
        "title": "Profesor Nac. de Ed. Física",
        "school": "Instituto Frederic Chopin",
        "career":"Profesorado de Ed. Física",
        "score":100,
        "start": "2006",
        "end":"2009"
      },
      {
        "id": 4,
        "title": "Bachiller",
        "school": "Inst. Don Quijote de la Mancha",
        "career":"Bachiller en Economia y Gestión de las Organizaciones",
        "score":100,
        "start": "2003",
        "end": "2005"
      }
    ]
  }
}
