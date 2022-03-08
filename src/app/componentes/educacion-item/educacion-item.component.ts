import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Educacion} from "../educacion/Educacion";
import { EDUCACION } from "../educacion/mock-educacion";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  @Input() educacion: Educacion = EDUCACION[0];
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter()
  faTimes= faTimes;
  title='Educación';
  constructor() { }

  ngOnInit(): void {
  }
  toggleaddeducacion(){
    console.log("toggleaddeducacion");
  }
  onDelete(educacion:Educacion){
  
    this.onDeleteEducacion.emit(educacion);
  }
}

