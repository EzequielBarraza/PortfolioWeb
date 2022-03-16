import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddEducacion : boolean = false;
private subjet = new Subject<any>();
private showAddExperiencia : boolean = false;
  constructor() { }
  toggleAddEducacion():void {
    console.log("Toggle Add Educacion");
this.showAddEducacion = !this.showAddEducacion
this.subjet.next(this.showAddEducacion);
  }

  toggleAddExperienciap():void {
    console.log("Toggle Add Experiencia");
this.showAddExperiencia = !this.showAddExperiencia
this.subjet.next(this.showAddExperiencia);
  }
  onToggle() : Observable<any>{
    return this.subjet.asObservable();
  }
}

