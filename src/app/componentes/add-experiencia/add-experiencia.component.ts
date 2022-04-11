import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription} from 'rxjs'
import { Experiencia } from '../../data/Experiencia';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  @Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter()
  Cargo: string ="Cargo";
  Institucion: string="Institución";
  Periodo: string ="Periodo";
  cargo: string ="";
  institucion: string="";
  periodo: string ="";
  showAddExperiencia: boolean= false;
subscription? : Subscription;

  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddExperiencia = value)}

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.cargo.length ===0){
      alert("Please add a Educación!");
      return
    }
    const {cargo, institucion, periodo} = this
    const newExperiencia = {cargo, institucion, periodo}
    this.onAddExperiencia.emit(newExperiencia);
    }
}
