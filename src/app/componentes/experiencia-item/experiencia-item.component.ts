import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Experiencia} from "../experiencia/Experiencia";
import { EXPERIENCIA } from "../experiencia/mock-experiencia";
import {ButtonComponent} from "../button/button.component"
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia: Experiencia = EXPERIENCIA[0];
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter()
  faTimes= faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  toggleaddexperiencia(){
    console.log("toggleaddexperiencia");
  }
  onDelete(experiencia:Experiencia){
  console.log("DELETE!");
    this.onDeleteExperiencia.emit(experiencia);
  }
}
