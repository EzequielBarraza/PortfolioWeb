import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddEducacion : boolean = false;
private subjet = new Subject<any>();
private showAddExperiencia : boolean = false;
private showAddSkill : boolean = false;
private showAddAcercaDe : boolean = false;

  constructor() { }
  
  toggleAddEducacion():void {
    console.log("Toggle Add Educacion");
this.showAddEducacion = !this.showAddEducacion
this.subjet.next(this.showAddEducacion);
  }

  toggleAddExperiencia():void {
    console.log("Toggle Add Experiencia");
this.showAddExperiencia = !this.showAddExperiencia
this.subjet.next(this.showAddExperiencia);
  }
  toggleAddSkill():void {
    console.log("Toggle Add Skill");
this.showAddSkill = !this.showAddSkill
this.subjet.next(this.showAddSkill);
  }
  toggleAddAcercaDe():void {
    console.log("Toggle Add AcercaDe");
this.showAddAcercaDe = !this.showAddAcercaDe
this.subjet.next(this.showAddAcercaDe);
  }
  onToggle() : Observable<any>{
    return this.subjet.asObservable();
  }
}

